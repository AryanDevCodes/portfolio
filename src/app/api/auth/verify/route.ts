import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin_session');
    const expiresAt = cookieStore.get('admin_session_expires');
    
    if (!sessionToken || !expiresAt) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }
    
    const expiresAtTime = parseInt(expiresAt.value, 10);
    
    // Check if session expired
    if (Date.now() >= expiresAtTime) {
      return NextResponse.json(
        { authenticated: false, message: 'Session expired' },
        { status: 401 }
      );
    }
    
    return NextResponse.json({
      authenticated: true,
      expiresAt: expiresAtTime
    });
    
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    );
  }
}
