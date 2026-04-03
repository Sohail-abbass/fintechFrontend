'use client';

import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { Wrapper, Card, Title, ToggleText, ToggleBtn } from '@/components/auth/style';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Wrapper>
      <Card>
        <Title>{isLogin ? 'Login' : 'Register'}</Title>

        {isLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm onSuccess={() => setIsLogin(true)} />
        )}

        <ToggleText>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <ToggleBtn onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </ToggleBtn>
        </ToggleText>
      </Card>
    </Wrapper>
  );
}