'use client';

import { useEffect, useState } from 'react';
import { getInsights } from '@/features/auth/services/insight.api';
export default function InsightsPage() {
interface Insights {
    message:string;
}
  const [data, setData] = useState<Insights | null>(null);

  useEffect(() => {
    getInsights().then((res) => {
     setData(res);
    }).catch((err) => {
     console.error('Error fetching insights:', err);
    });
   }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Smart Insights</h2>

        <p>{data.message}</p>
    </div>
  );
}