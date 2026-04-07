import axios from 'axios';
const baseURL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export const api = axios.create({
  baseURL,
 headers: { 'Content-Type': 'application/json' },
  validateStatus: (status) => status < 600,
}); 
// ADD THIS: This runs BEFORE every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // or get from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });