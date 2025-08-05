import { setCookie, parseCookies, destroyCookie } from 'nookies';

export const storeUserDataInCookies = (data: any) => {
  setCookie(null, 'access_token', data.accessToken, {
    maxAge: 1 * 24 * 60 * 60, // 1 days
    path: '/', // Available site-wide
    httpOnly: false, // Allow JavaScript access
    secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
    sameSite: 'Lax', // Allow cookies on same site requests
  });

  setCookie(null, 'refresh_token', data.refreshToken, {
    maxAge: 1 * 24 * 60 * 60,
    path: '/',
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax',
  });

  setCookie(null, 'user_name', data.user.user_name || '', {
    maxAge: 1 * 24 * 60 * 60,
    path: '/',
  });

  setCookie(null, 'user_email', data.user.user_email, {
    maxAge: 1 * 24 * 60 * 60,
    path: '/',
  });

  setCookie(null, 'is_admin', data.user.is_admin, {
    maxAge: 1 * 24 * 60 * 60,
    path: '/',
  });

  setCookie(null, 'user_id', String(data.user.id), {
    maxAge: 1 * 24 * 60 * 60,
    path: '/',
  });
};


// Get user name from cookies


export const getUserDataFromCookies = () => {
  const cookies = parseCookies();
  return {
    access_token: cookies.access_token || null,
    refresh_token: cookies.refresh_token || null,
    user_name: cookies.user_name || 'Guest',
    user_email: cookies.user_email || null,
    user_id: cookies.user_id ? parseInt(cookies.user_id) : null,
  };
};


// Clear all cookies
export const clearUserDataFromCookies = () => {
    destroyCookie(null, 'access_token');
    destroyCookie(null, 'refresh_token');
    destroyCookie(null, 'user_name');
    destroyCookie(null, 'user_email');
    destroyCookie(null, 'user_id');
  };
