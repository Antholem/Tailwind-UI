import React from 'react';
import theme from '@/app/theme';

const Content = () => {
  const color = theme();

  return (
    <>
      <button className={`${color.bgGray} p-6 text-black`}>
        BUTTON
      </button>
      <h1 className={color.textGray}>
        TEXT COLOR
      </h1>
    </>
  );
};

export default Content;
