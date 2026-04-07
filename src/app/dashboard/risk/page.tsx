'use client';

import { useEffect, useState } from 'react';
import { getRisk } from '@/features/auth/services/risk.api';
export default function RiskPage() {
 interface Risk {
    level: string;
    score: number;
    reason: string;
 }
    const [risk, setRisk] = useState<Risk | null>(null);

  useEffect(() => {
   getRisk().then((res) => {
    setRisk(res);
   }).catch((err) => {
    console.error('Error fetching risk:', err);
   });
  }, []);

  if (!risk) return <p>Loading...</p>;

  return (
    <div>
      <h2>Risk Scoring</h2>

      <p>Risk Level: {risk.level}</p>
      <p>Score: {risk.score}</p>
      <p>Reason: {risk.reason}</p>
    </div>
  );
}