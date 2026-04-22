'use client';

import { useState } from 'react';
import LoanForm from './LoanForm';
import LoanResult from './LoanResult';

export default function LoanPage() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>Loan Decision Engine</h1>

      <LoanForm onResult={setResult} />

      <LoanResult data={result} />
    </div>
  );
}