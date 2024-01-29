'use client';
import React from 'react';
import { useDarkMode } from '@/app/state';
import { Home } from './(views)';

const Page = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={` ${darkMode && 'dark-mode'}`}>
      <Home />
    </div>
  );
};

export default Page;
