import React from 'react';
// import theme from '@/app/theme';
import { sample } from '@/app/store';
import { useAtom } from 'jotai';

const Home = () => {
  // const { text } = theme();
  const [sampleName] = useAtom(sample);

  return (
    <>
      {/* <button className={text.blue}>
        BUTTON
      </button> */}
      <h1>
        {sampleName}
      </h1>
    </>
  );
};

export default Home;
