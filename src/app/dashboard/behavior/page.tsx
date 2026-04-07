'use client';

import { useEffect, useState } from 'react';
import { getBehavior } from '@/features/auth/services/behavior.api';
export default function BehaviorPage() {
    interface Behavior {
        totalSpend: number;
        topCategory: string;
        score: number;
    }
  const [data, setData] = useState<Behavior | null>(null);

 useEffect(()=>{
    getBehavior().then((res) => {
        setData(res);
    });
 }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Behavior Analysis</h2>

      <p>Total Spend: {data.totalSpend}</p>
      <p>Top Category: {data.topCategory}</p>
      <p>Consistency Score: {data.score}</p>
    </div>
  );
}