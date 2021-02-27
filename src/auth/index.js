
import Cookie from 'js-cookie'

export function isAuthenticated() {
  if (typeof window === undefined) {
    return false;
  }
  return Cookie.get('user') === 'admin';
}

export function signOut(next) {
  Cookie.remove('user');
  next();
}