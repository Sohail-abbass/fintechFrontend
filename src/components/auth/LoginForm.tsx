
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/features/auth/hooks/useLogin';
import { Input, Button, ErrorText } from './style';

export default function LoginForm() {
  const router = useRouter();
  const { mutate, isPending } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push('/dashboard'); // ✅ correct
        },
        onError: () => {
          setError('Invalid credentials');
        },
      }
    );
  };

  return (
    <>
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      {error && <ErrorText>{error}</ErrorText>}

      <Button onClick={handleSubmit}>
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </>
  );
}