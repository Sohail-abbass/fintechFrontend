'use client';

import { useState } from 'react';
import styled from 'styled-components';
import ProfileForm from './ProfileForm';
import TransactionForm from './TransactionForm';
// import ProfileForm from './ProfileForm';
// import TransactionForm from './TransactionForm';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 500px;
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  color: white;
`;

const Tab = styled.button<{ active: boolean }>`
  margin-right: 10px;
  padding: 8px;
  background: ${({ active }) => (active ? '#3b82f6' : '#334155')};
  color: white;
  border: none;
  cursor: pointer;
`;

export default function DataInputModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<'profile' | 'transaction'>('profile');

  return (
    <Overlay>
      <Modal>
        <h2>Add Financial Data</h2>

        <div>
          <Tab active={tab === 'profile'} onClick={() => setTab('profile')}>
            Profile
          </Tab>
          <Tab active={tab === 'transaction'} onClick={() => setTab('transaction')}>
            Transactions
          </Tab>
        </div>

        {tab === 'profile' ? <ProfileForm/> : <TransactionForm />}

        <button onClick={onClose}>Close</button>
      </Modal>
    </Overlay>
  );
}