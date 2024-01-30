'use client';
import React from 'react';
import globalState from '@/app/state';
import { Home } from './(views)';

const Page = () => {
  const { darkMode } = globalState();

  return (
    <div className={` ${darkMode && 'dark-mode'}`}>
      <Home />
    </div>
  );
};

export default Page;
