'use client';
import React from 'react';
import useDarkModeStore from '@/app/_store/theme-store';
import { Navigation } from '@/app/views';
import Content from './views/components/content';

const Page = () => {
  const { darkMode } = useDarkModeStore();

  return (
    <div className={` ${darkMode && 'dark-mode'}`}>
      <Content />
    </div>
  );
};

export default Page;
