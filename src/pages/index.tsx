import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Output from '../components/Output';

import { media } from '../components/GlobalStyle.css';

const Main = styled.main`
  display: flex;
  ${media['1050']`flex-direction: column;`}
  margin: 45px auto 1rem !important;
  ${media['600']`margin: 20px auto 1rem !important`};
  gap: clamp(0.5rem, 2.5vw, 4rem);
  ${media['1050']`gap: 0.75rem`};
`;

export default function Home() {
  const [arrivalTime, setArrivalTime] = useState<number[]>([]);
  const [burstTime, setBurstTime] = useState<number[]>([]);

  return (
    <div>
      <Head>
        <title>FSFC Algorithm Simulation</title>
      </Head>

      <Main className="container">
        <Input
          setArrivalTime={setArrivalTime}
          setBurstTime={setBurstTime}
        />
        <Output
          arrivalTime={arrivalTime}
          burstTime={burstTime}
        />
      </Main>
    </div>
  );
}
