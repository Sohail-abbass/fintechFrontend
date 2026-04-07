'use client';

import { useState } from 'react';
// import axios from 'axios';
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
    <div>
      <input
        placeholder="Monthly Income"
        onChange={(e) => setData({ ...data, monthlyIncome: e.target.value })}
      />

      <select
        onChange={(e) => setData({ ...data, employmentType: e.target.value })}
      >
        <option value="freelancer">Freelancer</option>
        <option value="employee">Employee</option>
        <option value="labor">Labor</option>
      </select>

      <input
        placeholder="Savings"
        onChange={(e) => setData({ ...data, savings: e.target.value })}
      />

      <button onClick={handleSubmit}>Save Profile</button>
    </div>
  );
}