'use client';

import styled from 'styled-components';

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

export default function DashboardPage() {
  return (
    <>
      <h1>Overview</h1>

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