'use client';
import React from 'react';
import globalState from '@/app/state';
import Content from './views/components/content/page';

const Page = () => {
  const { darkMode } = globalState();

  return (
    <div className={` ${darkMode && 'dark-mode'}`}>
      <Content />
    </div>
  );
};

export default Page;
