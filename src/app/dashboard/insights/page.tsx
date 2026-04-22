'use client';

import { useEffect, useState } from 'react';
import { getInsights } from '@/features/auth/services/insight.api';

interface InsightItem {
  type: 'warning' | 'advice' | 'insight';
  message: string;
}

export default function InsightsPage() {
  const [data, setData] = useState<InsightItem[]>([]);

  useEffect(() => {
    getInsights()
      .then((res) => {
        console.log('FRONTEND DATA:', res); // 👈 add this
        setData(res);
      })
      .catch((err) => {
        console.error('Error fetching insights:', err);
      });
  }, []);

  if (!data) return <p>Loading...</p>;
  return (
    <div>
      <h2>Smart Insights</h2>

      {data.map((item, index) => (
  <div key={index} style={{ marginBottom: '10px' }}>
    <strong
      style={{
        color:
          item.type === 'warning'
            ? 'red'
            : item.type === 'advice'
            ? 'orange'
            : 'green',
      }}
    >
      {item.type.toUpperCase()}
    </strong>
    <p>{item.message}</p>
  </div>
))}
    </div>
  );
}