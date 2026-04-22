import axios from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from '../lib/auth';

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

// 🔐 REQUEST INTERCEPTOR (attach token)
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  console.log("this is our token",token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 🔁 RESPONSE INTERCEPTOR (refresh token flow)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // prevent infinite loop
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();

        if (!refreshToken) {
          clearTokens();
          window.location.href = '/auth';
          return Promise.reject(error);
        }

        const res = await axios.post(
          `${baseURL}/auth/refresh`,
          { refresh_token: refreshToken }
        );

        const { access_token, refresh_token } = res.data;

        setTokens(access_token, refresh_token);

        // retry original request
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (err) {
        clearTokens();
        window.location.href = '/auth';
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);