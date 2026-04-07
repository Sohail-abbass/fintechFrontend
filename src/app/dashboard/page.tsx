'use client';

import styled from 'styled-components';
import { useState } from 'react';
import DataInputModal from './DataInputModal';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
`;

const Topmost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export default function DashboardPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Topmost>
    <h1>Overview</h1>
      <button onClick={() => setOpen(true)}>+ Add Data</button>
      {open && <DataInputModal onClose={() => setOpen(false)} />}
    </Topmost>

      <Grid>
        <Card>
          <h3>Behavior Score</h3>
          <p>78 / 100</p>
        </Card>

        <Card>
          <h3>Risk Level</h3>
          <p>Medium</p>
        </Card>

        <Card>
          <h3>Monthly Spend</h3>
          <p>$1200</p>
        </Card>
      </Grid>
    </>
  );
}