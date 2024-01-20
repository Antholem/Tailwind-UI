import React from 'react';
import theme from '@/app/theme';

const Content = () => {
  const { textPurple } = theme();

  return (
    <>
      <button className={`${textPurple} p-6 text-black`}>
        BUTTON
      </button>
      <h1 className={textPurple}>
        TEXT COLOR
      </h1>
    </>
  );
};

export default Content;
