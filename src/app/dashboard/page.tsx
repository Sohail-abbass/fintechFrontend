'use client';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import DataInputModal from './DataInputModal';
import { getBehavior } from '@/features/auth/services/behavior.api';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  color: white;
`;

const StyledButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Topmost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

interface Behavior {
  monthlyIncome: number;
  totalSpend: number;
  savings: number;
  totalAssets: number;
  behaviorScore: number;
  riskLevel: string;
  topCategory: string;
}

export default function DashboardPage() {
  const [data, setData] = useState<Behavior | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getBehavior().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <Topmost>
        <h1>Overview</h1>

        <StyledButton onClick={() => setOpen(true)}>
          + Add Data
        </StyledButton>

        {open && <DataInputModal onClose={() => setOpen(false)} />}
      </Topmost>

      <Grid>
        <Card>
          <h3>Behavior Score</h3>
          <p>{data?.behaviorScore ?? '-'}</p>
        </Card>

        <Card>
          <h3>Risk Level</h3>
          <p>{data?.riskLevel ?? '-'}</p>
        </Card>

        <Card>
          <h3>Monthly Spend</h3>
          <p>{data?.totalSpend ?? '-'}</p>
        </Card>

        <Card>
          <h3>Monthly Income</h3>
          <p>{data?.monthlyIncome ?? '-'}</p>
        </Card>

        <Card>
          <h3>Savings</h3>
          <p>{data?.savings ?? '-'}</p>
        </Card>

        <Card>
          <h3>Total Assets</h3>
          <p>{data?.totalAssets ?? '-'}</p>
        </Card>
      </Grid>
    </>
  );
}