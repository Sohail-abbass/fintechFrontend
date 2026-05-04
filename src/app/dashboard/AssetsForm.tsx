'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { api } from '../baseUrl';

export default function AssetsForm({ onClose }: { onClose: () => void }) {
  const [data, setData] = useState({
    landValue: '',
    carValue: '',
    goldValue: '',
    otherAssets: '',
  });

  const handleSubmit = async () => {
    try {
      await api.post('/assets', {
        landValue: Number(data.landValue),
        carValue: Number(data.carValue),
        goldValue: Number(data.goldValue),
        otherAssets: Number(data.otherAssets),
      });

      alert('Assets saved successfully');

      // reset form
      setData({
        landValue: '',
        carValue: '',
        goldValue: '',
        otherAssets: '',
      });
    } catch (err) {
      console.error(err);
      alert('Failed to save assets');
    }
  };

  const handleCancel = () => {
    setData({
      landValue: '',
      carValue: '',
      goldValue: '',
      otherAssets: '',
    });
  };

  return (
    <Container>
      <Title>Assets Information</Title>

      <Input
        placeholder="Land Value (PKR)"
        value={data.landValue}
        onChange={(e) =>
          setData({ ...data, landValue: e.target.value })
        }
      />

      <Input
        placeholder="Car Value (PKR)"
        value={data.carValue}
        onChange={(e) =>
          setData({ ...data, carValue: e.target.value })
        }
      />

      <Input
        placeholder="Gold / Investment Value"
        value={data.goldValue}
        onChange={(e) =>
          setData({ ...data, goldValue: e.target.value })
        }
      />

      <Input
        placeholder="Other Assets"
        value={data.otherAssets}
        onChange={(e) =>
          setData({ ...data, otherAssets: e.target.value })
        }
      />

      <ButtonGroup>
        <PrimaryButton onClick={handleSubmit}>
          Save Assets
        </PrimaryButton>
        <SecondaryButton onClick={onClose}>
          Cancel
        </SecondaryButton>
      </ButtonGroup>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  color: white;
`;

const Input = styled.input`
  // width: 100%;
  margin-bottom: 12px;
  // padding: 10px;
  // border-radius: 8px;
  // border: none;
  // outline: none;
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