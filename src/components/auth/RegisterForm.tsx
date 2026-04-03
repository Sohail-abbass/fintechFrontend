'use client';

import { useState } from 'react';
import { useRegister } from '@/features/auth/hooks/useLogin';
import { Input, Button, ErrorText } from './style';

export default function RegisterForm({ onSuccess }: { onSuccess: () => void }) {
  const { mutate, isPending } = useRegister();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    mutate(
      { email, password },
      {
        onSuccess: () => {
          onSuccess(); // 🔥 toggle back to login
        },
        onError: () => {
          setError('Registration failed');
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
        {isPending ? 'Creating...' : 'Register'}
      </Button>
    </>
  );
}