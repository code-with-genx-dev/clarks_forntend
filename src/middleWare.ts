import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {

  const accessToken = req.cookies.get('access_token')?.value;

  const protectedRoutes = [''];

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!accessToken) {
      console.log(' No access token found! Redirecting to main page.');
      return NextResponse.redirect(new URL('/#', req.url));
    } else {
      console.log('Access token found! Allowing access.');
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [''],
};
