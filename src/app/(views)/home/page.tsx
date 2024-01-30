// home.tsx
import React from 'react';
import { sample } from '@/app/store';
import { useAtom } from 'jotai';

const Home = () => {
  const [sampleName] = useAtom(sample);

  return (
    <>
      <h1>
        {sampleName}
      </h1>
    </>
  );
};

export default Home;
