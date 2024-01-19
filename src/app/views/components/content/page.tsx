// Content.js

import React from 'react';
import getTheme from '@/app/theme';

const Content = () => {
  const { text } = getTheme();

  return (
    <>
      <button className={`${text.default} p-4`}>
        sas
      </button>
    </>
  );
};

export default Content;
