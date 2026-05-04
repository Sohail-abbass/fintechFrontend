'use client';

import { useState } from 'react';
import styled from 'styled-components';
import ProfileForm from './ProfileForm';
import TransactionForm from './TransactionForm';
import AssetsForm from './AssetsForm';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  color: white;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #b0bec5;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #334155;
    color: white;
  }
`;

const Tab = styled.button<{ active: boolean }>`
  margin-right: 10px;
  padding: 8px;
  background: ${({ active }) => (active ? '#3b82f6' : '#334155')};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
`;

export default function DataInputModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<'profile' | 'transaction' | 'assets'>('profile');
const [open, setOpen]= useState(false);

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Add Financial Data</h2>

        {/* Tabs */}
        <div style={{ marginBottom: '16px' }}>
          <Tab active={tab === 'profile'} onClick={() => setTab('profile')}>
            Profile
          </Tab>
          <Tab active={tab === 'transaction'} onClick={() => setTab('transaction')}>
            Transactions
          </Tab>
          <Tab active={tab === 'assets'} onClick={() => setTab('assets')}>
            Assets
          </Tab>
        </div>

        {/* Content */}
        {tab === 'profile' && <ProfileForm onClose={onClose} />}
        {tab === 'transaction' && <TransactionForm onClose={onClose} />}
        {tab === 'assets' && <AssetsForm onClose={onClose} />}
      </Modal>
    </Overlay>
  );
}