import type { Blog } from './blogs';

const STORAGE_KEY = 'portfolio_blogs';

// Secure API-based authentication
export async function verifyAdminPassword(password: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }
    
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
}

export async function isAuthenticated(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  try {
    const response = await fetch('/api/auth/verify', {
      method: 'GET',
      credentials: 'include',
    });
    
    const data = await response.json();
    return data.authenticated === true;
  } catch {
    return false;
  }
}

export async function logout(): Promise<void> {
  if (typeof window === 'undefined') return;
  
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
  } catch (error) {
    // Silent fail - clear client state anyway
  }
}

export function getStoredBlogs(): Blog[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveBlog(blog: Blog): void {
  const blogs = getStoredBlogs();
  const existingIndex = blogs.findIndex(b => b.slug === blog.slug);
  
  if (existingIndex >= 0) {
    blogs[existingIndex] = blog;
  } else {
    blogs.push(blog);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}

export function deleteBlog(slug: string): void {
  const blogs = getStoredBlogs().filter(b => b.slug !== slug);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}

export function getAllBlogs(includeStored: boolean = true): Blog[] {
  if (!includeStored) {
    // Return only default blogs from blogs.ts
    return [];
  }
  return getStoredBlogs();
}
