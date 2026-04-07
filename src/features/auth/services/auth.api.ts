// import axios from 'axios';
import { api } from '@/app/baseUrl';
export type LoginBody = {
  email: string;
  password: string;
};

export type RegisterBody = LoginBody;

export type AuthTokensResponse = {
  access_token: string;
  refresh_token: string;
};

// const baseURL =
//   process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

// const api = axios.create({
//   baseURL,
//  headers: { 'Content-Type': 'application/json' },
//   validateStatus: (status) => status < 600,
// }); 

export async function loginUser(body: LoginBody) {
  const res = await api.post<AuthTokensResponse>('/auth/login', body);
  if (res.status >= 400) {
    const msg =
      (res.data as { message?: string })?.message ??
      `Login failed (${res.status})`;
    throw new Error(typeof msg === 'string' ? msg : 'Login failed');
  }
  return res;
}

export async function registerUser(body: RegisterBody) {
  const res = await api.post<AuthTokensResponse>('/auth/register', body);
  if (res.status >= 400) {
    const data = res.data as { message?: string | string[] };
    const msg = Array.isArray(data?.message)
      ? data.message.join(', ')
      : data?.message;
    throw new Error(msg ?? `Registration failed (${res.status})`);
  }
  return res;
}

export async function refreshTokens(refresh_token: string) {
  const res = await api.post<AuthTokensResponse>('/auth/refresh', {
    refresh_token,
  });
  if (res.status >= 400) {
    throw new Error('Session expired. Please sign in again.');
  }
  return res;
}
