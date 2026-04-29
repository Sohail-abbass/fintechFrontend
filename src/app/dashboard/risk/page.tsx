'use client';

import { useEffect, useState } from 'react';
import { getRisk } from '@/features/auth/services/risk.api';
export default function RiskPage() {
 interface Risk {
    riskLevel: string;
    loanEligibility: string;
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

      <p>Risk Level: {risk.riskLevel}</p>
      <p>Loan Eligibility: {risk.loanEligibility}</p>
    </div>
  );
}