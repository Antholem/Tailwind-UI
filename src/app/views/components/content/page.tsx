import React from 'react';
import theme from '@/app/theme';

const Content = () => {

  const {color} = theme();

  return (
    <>
      <button className={`${color.textGreen}`}>
        SAMPLE COLOR
      </button>
    </>
  );
};

export default Content;
