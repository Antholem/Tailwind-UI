import { useDarkMode } from '@/app/store';
import React from 'react';

const Home = () => {
  const { darkMode } = useDarkMode()

  return (
    <>
      <h1>
        Home Page
      </h1>
    </>
  );
};

export default Home;
