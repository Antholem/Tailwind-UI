// home.tsx
import React from 'react';
import { sample } from '@/app/store';
import { useAtom, atom } from 'jotai'

const countAtom = atom(0)

const Home = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>one up {count}</button>
    </>
  );
};

export default Home;
