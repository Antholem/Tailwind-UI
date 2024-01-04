'use client';
import React from 'react';
import useDarkModeStore from '@/app/_store/theme-store';
import Content from './views/components/content/page';

const Page = () => {
  const { darkMode } = useDarkModeStore();

  return (
    <div className={` ${darkMode && 'dark-mode'}`}>
      <Content />
    </div>
  );
};

export default Page;
