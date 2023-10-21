// /workspaces/ambrecht2023/middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession()

  // Refresh session if expired
  const { data } = await supabase.auth.getSession();
  const user = data?.session?.user;

  // Check if the user is trying to access the admin route
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!user) {
      // User is not authenticated, redirect to login page
      const url = req.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  return res;
}
