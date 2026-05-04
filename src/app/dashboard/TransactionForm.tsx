'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { api } from '../baseUrl';

export default function TransactionForm({ onClose }: { onClose: () => void }) {
  const [data, setData] = useState({
    amount: '',
    type: 'debit',
    category: 'food',
    merchant: '',
    date: '',
  });

  const handleSubmit = async () => {
    await api.post('/transactions', {
      ...data,
      amount: Number(data.amount),
    });

    alert('Transaction added');
  };

  return (
    <Container>
      <Title>Add Transaction</Title>

      <Form>
        <Row>
          <Field>
            <Label>Amount</Label>
            <Input
              type="number"
              placeholder="Enter amount"
              onChange={(e) =>
                setData({ ...data, amount: e.target.value })
              }
            />
          </Field>

          <Field>
            <Label>Type</Label>
            <Select
              onChange={(e) =>
                setData({ ...data, type: e.target.value })
              }
            >
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </Select>
          </Field>
        </Row>

        <Field>
          <Label>Category</Label>
          <Select
            onChange={(e) =>
              setData({ ...data, category: e.target.value })
            }
          >
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="transport">Transport</option>
            <option value="bills">Bills</option>
          </Select>
        </Field>

        <Field>
          <Label>Merchant</Label>
          <Input
            placeholder="e.g. Amazon, KFC"
            onChange={(e) =>
              setData({ ...data, merchant: e.target.value })
            }
          />
        </Field>

        <Field>
          <Label>Date</Label>
          <Input
            type="date"
            onChange={(e) =>
              setData({ ...data, date: e.target.value })
            }
          />
        </Field>

        <ButtonGroup>
          <PrimaryButton onClick={handleSubmit}>
            Add Transaction
          </PrimaryButton>
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        </ButtonGroup>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  width: 420px;
  padding: 24px;
  background: #1f2a3a;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  color: #fff;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
`;

const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  color: #b0bec5;
`;

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #3a4a5a;
  background: #2c3e50;
  color: #fff;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4da3ff;
    box-shadow: 0 0 0 2px rgba(77, 163, 255, 0.2);
  }
`;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #3a4a5a;
  background: #2c3e50;
  color: #fff;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4da3ff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const PrimaryButton = styled.button`
  background: #4da3ff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #3391f7;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #b0bec5;
  border: 1px solid #3a4a5a;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #2c3e50;
  }
`;