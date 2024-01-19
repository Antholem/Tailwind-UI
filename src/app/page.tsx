'use client';
import React from 'react';
import { useDarkMode } from '@/app/state';
import Content from './views/components/content/page';

const Page = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={` ${darkMode && 'dark-mode'}`}>
      <Content />
    </div>
  );
};

export default Page;
