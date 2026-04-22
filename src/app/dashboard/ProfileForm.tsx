'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { api } from '../baseUrl';

export default function ProfileForm() {
  const [data, setData] = useState({
    monthlyIncome: '',
    employmentType: 'freelancer',
    savings: '',
  });

  const handleSubmit = async () => {
    await api.post('/profile', {
      monthlyIncome: Number(data.monthlyIncome),
      employmentType: data.employmentType,
      savings: Number(data.savings),
    });
    alert('Profile saved');
  };

  return (
    <Container>
      <Title>Add Financial Data</Title>

      <Form>
        <Field>
          <Label>Monthly Income</Label>
          <Input
            type="number"
            placeholder="Enter your income"
            onChange={(e) =>
              setData({ ...data, monthlyIncome: e.target.value })
            }
          />
        </Field>

        <Field>
          <Label>Employment Type</Label>
          <Select
            onChange={(e) =>
              setData({ ...data, employmentType: e.target.value })
            }
          >
            <option value="freelancer">Freelancer</option>
            <option value="employee">Employee</option>
            <option value="labor">Labor</option>
          </Select>
        </Field>

        <Field>
          <Label>Savings</Label>
          <Input
            type="number"
            placeholder="Enter your savings"
            onChange={(e) =>
              setData({ ...data, savings: e.target.value })
            }
          />
        </Field>

        <ButtonGroup>
          <PrimaryButton onClick={handleSubmit}>
            Save Profile
          </PrimaryButton>
          <SecondaryButton>Cancel</SecondaryButton>
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

const Field = styled.div`
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