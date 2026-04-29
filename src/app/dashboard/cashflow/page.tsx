

'use client';

import { useEffect, useState } from 'react';
import { getCashflow } from '@/features/auth/services/cashflow.api';
export default function CashflowPage() {
interface Cashflow {
  monthlyBurn:number;
  runOutDays:string;
    status: string;
}
  const [data, setData] = useState<Cashflow | null>(null);

  useEffect(() => {
   getCashflow().then((res) => {
    setData(res);
   });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Cash Flow Prediction</h2>
      <p>Monthly Burn: {data.monthlyBurn}</p>
      <p>Run-out Date: {data.runOutDays}</p>
      <p>Status: {data.status}</p>


      
    </div>
  );
}