import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('access_token')?.value;
  const isAdmin = req.cookies.get('is_admin')?.value;
  const { pathname } = req.nextUrl;

  // ✅ Allow access to /admin/login always
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // 🔐 Admin Routes (other than login)
  if (pathname.startsWith('/admin')) {
    // ⚠️ First time: if no access token but isAdmin cookie is there → redirect to signin
    if (isAdmin && !accessToken) {
      return NextResponse.redirect(new URL('/admin/signin', req.url));
    }

    // ❌ Not allowed: if neither cookie is present
    if (!accessToken || !isAdmin) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // 🔐 Product Routes
  if (pathname.startsWith('/product') && pathname !== '/login') {
    if (!accessToken) {
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
