'use client';
import React from 'react';
import useDarkModeStore from '@/app/_store/theme-store';
import { Navbar } from '@/app/_layouts';

const Page = () => {
  const { darkMode } = useDarkModeStore();

  return (
    <div className={` ${darkMode && 'dark-mode'}`}>
      <Navbar />
    </div>
  );
};

export default Page;
