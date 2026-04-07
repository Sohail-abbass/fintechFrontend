

'use client';

import { useEffect, useState } from 'react';
import { getCashflow } from '@/features/auth/services/cashflow.api';
export default function CashflowPage() {
interface Cashflow {
    balance:number;
    runOutDate:string;
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
      <p>Predicted Balance: {data.balance}</p>
      <p>Run-out Date: {data.runOutDate}</p>

      
    </div>
  );
}