'use client';

import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 260px;
  background: #0f172a;
  padding: 20px;
  color: white;
`;

const Logo = styled.h2`
  margin-bottom: 30px;
`;

const NavItem = styled.div<{ active: boolean }>`
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ active }) => (active ? '#1e293b' : 'transparent')};

  &:hover {
    background: #1e293b;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 60px;
  background: #020617;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #1e293b;
  border-color: 2px solid red !important;
  
`;

const LogoutBtn = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 30px;
  background: #020617;
  color: white;
`;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname();

  const navItems = [
    { label: 'Overview', path: '/dashboard' },
    { label: 'Behavior Analysis', path: '/dashboard/behavior' },
    { label: 'Risk Scoring', path: '/dashboard/risk' },
    { label: 'Cash Flow', path: '/dashboard/cashflow' },
    { label: 'Smart Insights', path: '/dashboard/insights' },
  ];

  const logout = () => {
    localStorage.clear(); // 🔥 later replace with cookies
    router.push('/auth');
  };

  return (
    <Wrapper>
      <Sidebar>
        <Logo>FinTech AI</Logo>

        {navItems.map((item) => (
          <NavItem
            key={item.path}
            active={path === item.path}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </NavItem>
        ))}
      </Sidebar>

      <Main>
        {/* 🔥 HEADER WITH LOGOUT */}
        <Header>
          <LogoutBtn onClick={logout}>Logout</LogoutBtn>
        </Header>

        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
}