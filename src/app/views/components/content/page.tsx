import React from 'react';
import theme from '@/app/theme';

const Content = () => {
  const color = theme();

  return (
    <>
      <button className={`${color.psGray} p-6 text-black`}>
        BUTTON
      </button>
      <h1 className={`${color.textGreen} font-black text-6xl`}>
        TEXT COLOR
      </h1>
    </>
  );
};

export default Content;
