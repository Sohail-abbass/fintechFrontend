'use client';

import { useState } from 'react';
import { api } from '../baseUrl';

export default function TransactionForm() {
  const [data, setData] = useState({
    amount: '',
    type: 'debit',
    category: 'food',
    merchant: '',
    date: '',
  });

  const handleSubmit = async () => {
    api.post('/transactions', {
      ...data,
      amount: Number(data.amount),
    });

    alert('Transaction added');
  };

  return (
    <div>
      <input
        placeholder="Amount"
        onChange={(e) => setData({ ...data, amount: e.target.value })}
      />

      <select onChange={(e) => setData({ ...data, type: e.target.value })}>
        <option value="debit">Debit</option>
        <option value="credit">Credit</option>
      </select>

      <input
        placeholder="Merchant (e.g. Amazon)"
        onChange={(e) => setData({ ...data, merchant: e.target.value })}
      />

      <input
        type="date"
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />

      <button onClick={handleSubmit}>Add Transaction</button>
    </div>
  );
}