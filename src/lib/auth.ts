const ACCESS_KEY = 'access_token';
const REFRESH_KEY = 'refresh_token';

// helper
function setCookie(name: string, value: string, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; path=/; expires=${expires}`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(
    new RegExp('(^| )' + name + '=([^;]+)')
  );
  return match ? match[2] : null;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/`;
}

// ✅ store tokens in cookies
export function setTokens(access: string, refresh: string) {
  if (!access || !refresh) return;

  setCookie(ACCESS_KEY, access);
  setCookie(REFRESH_KEY, refresh);
}

export function getAccessToken(): string | null {
  return getCookie(ACCESS_KEY);
}

export function getRefreshToken(): string | null {
  return getCookie(REFRESH_KEY);
}

export function clearTokens() {
  deleteCookie(ACCESS_KEY);
  deleteCookie(REFRESH_KEY);
}