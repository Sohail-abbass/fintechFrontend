import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import { setTokens } from '@/lib/auth';
import {
  loginUser,
  registerUser,
  type AuthTokensResponse,
  type LoginBody,
  type RegisterBody,
} from '../services/auth.api';

function persistTokens(res: AxiosResponse<AuthTokensResponse>) {
  const access = res.data?.access_token;
  const refresh = res.data?.refresh_token;
  if (!access || !refresh) {
    throw new Error('Invalid response: missing tokens');
  }
  setTokens(access, refresh);
}

export function useLogin() {
  return useMutation({
    mutationFn: (body: LoginBody) => loginUser(body),
    onSuccess: persistTokens,
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (body: RegisterBody) => registerUser(body),
    onSuccess: persistTokens,
  });
}
