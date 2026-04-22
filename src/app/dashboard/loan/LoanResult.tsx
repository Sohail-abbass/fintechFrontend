'use client';

import styled from 'styled-components';

export default function LoanResult({ data }: any) {
  if (!data) return null;

  return (
    <Card status={data.status}>
      <h3>Status: {data.status.toUpperCase()}</h3>
      <p>Approved Amount: {data.approvedAmount}</p>
      <p>{data.reason}</p>
    </Card>
  );
}

const Card = styled.div<{ status: string }>`
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;

  background: ${({ status }) =>
    status === 'approved'
      ? '#064e3b'
      : status === 'conditional'
      ? '#78350f'
      : '#7f1d1d'};
`;