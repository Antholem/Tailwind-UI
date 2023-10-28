'use client';
import React from 'react';
import useDarkModeStore from '@/app/_store/theme-store';
import { Navigation } from '@/app/views';

const Page = () => {
  const { darkMode } = useDarkModeStore();

  return (
    <div className={` ${darkMode && 'dark-mode'}`}>
      <Navigation>
        Content
      </Navigation>
    </div>
  );
};

export default Page;
