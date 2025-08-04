import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('access_token')?.value;
  const isAdmin = req.cookies.get('isadmin')?.value === 'true';
  const { pathname } = req.nextUrl;

  // 🔐 Handle /admin routes except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!accessToken || !isAdmin) {
      console.log('Blocked admin route: No access token or not an admin');
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // 🔒 Handle /product routes except /login
  if (pathname.startsWith('/product') && pathname !== '/login') {
    if (!accessToken) {
      console.log('Blocked product route: No access token');
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/product/:path*',
  ],
};

// export function middleware(req: NextRequest) {

//   const accessToken = req.cookies.get('access_token')?.value;

//   const protectedRoutes = ['/product'];

//   if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
//     if (!accessToken) {
//       console.log(' No access token found! Redirecting to main page.');
//       return NextResponse.redirect(new URL('/login', req.url));
//     } else {
//       console.log('Access token found! Allowing access.');
//     }
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/product','/product/:path*'],
// };
