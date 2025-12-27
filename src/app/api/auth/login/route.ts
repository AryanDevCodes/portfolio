import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import crypto from 'crypto';

const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes
const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours

// In-memory store for login attempts (in production, use Redis or database)
const loginAttempts = new Map<string, { count: number; lockedUntil?: number }>();

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function getClientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  // Fallback: use user-agent or a random string
  const ua = request.headers.get('user-agent');
  return ua ? ua : Math.random().toString(36).slice(2);
}

function checkLoginAttempts(clientId: string): { allowed: boolean; message?: string } {
  const attempts = loginAttempts.get(clientId);
  
  if (!attempts) {
    return { allowed: true };
  }
  
  // Check if account is locked
  if (attempts.lockedUntil && Date.now() < attempts.lockedUntil) {
    const minutesLeft = Math.ceil((attempts.lockedUntil - Date.now()) / 60000);
    return {
      allowed: false,
      message: `Account locked. Try again in ${minutesLeft} minutes.`
    };
  }
  
  // Reset if lockout expired
  if (attempts.lockedUntil && Date.now() >= attempts.lockedUntil) {
    loginAttempts.delete(clientId);
    return { allowed: true };
  }
  
  return { allowed: true };
}

function recordFailedAttempt(clientId: string): string {
  const attempts = loginAttempts.get(clientId) || { count: 0 };
  const newCount = attempts.count + 1;
  
  if (newCount >= MAX_LOGIN_ATTEMPTS) {
    loginAttempts.set(clientId, {
      count: newCount,
      lockedUntil: Date.now() + LOCKOUT_DURATION
    });
    return `Too many failed attempts. Account locked for 15 minutes.`;
  } else {
    loginAttempts.set(clientId, { count: newCount });
    return `Invalid password. ${MAX_LOGIN_ATTEMPTS - newCount} attempts remaining.`;
  }
}

function resetAttempts(clientId: string): void {
  loginAttempts.delete(clientId);
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }
    
    const clientId = getClientIdentifier(request);
    
    // Check if client is locked out
    const attemptCheck = checkLoginAttempts(clientId);
    if (!attemptCheck.allowed) {
      return NextResponse.json(
        { error: attemptCheck.message },
        { status: 429 }
      );
    }
    
    // Verify password
    const passwordHash = hashPassword(password);
    
    if (passwordHash !== ADMIN_PASSWORD_HASH) {
      const errorMessage = recordFailedAttempt(clientId);
      return NextResponse.json(
        { error: errorMessage },
        { status: 401 }
      );
    }
    
    // Reset attempts on successful login
    resetAttempts(clientId);
    
    // Create session token
    const sessionToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + SESSION_DURATION;
    
    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: SESSION_DURATION / 1000,
      path: '/'
    });
    
    cookieStore.set('admin_session_expires', expiresAt.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: SESSION_DURATION / 1000,
      path: '/'
    });
    
    return NextResponse.json({
      success: true,
      expiresAt
    });
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
