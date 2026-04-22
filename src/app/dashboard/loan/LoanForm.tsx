'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { api } from '../../baseUrl';

export default function LoanForm({ onResult }: unknown) {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    try {
      setLoading(true);

      const res = await api.post('/scoring/loan-decision', {
        amount: Number(amount),
      });

      onResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to evaluate loan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2>Loan Eligibility</h2>

      <Input
        placeholder="Enter loan amount (PKR)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button onClick={handleCheck} disabled={loading}>
        {loading ? 'Checking...' : 'Check Eligibility'}
      </Button>
    </Container>
  );
}

/* styles */
const Container = styled.div`
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
`;

const Input = styled.input`
  width: 100%;
  margin: 12px 0;
  padding: 10px;
  border-radius: 8px;
  border: none;
`;

const Button = styled.button`
  background: #3b82f6;
  padding: 10px 16px;
  border-radius: 8px;
  color: white;
  border: none;
  cursor: pointer;
`;