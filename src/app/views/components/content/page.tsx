import React from 'react';
import theme from '@/app/theme';

const Content = () => {
  const { text } = theme();

  return (
    <>
      <button className={`${text.text_red} p-4`}>
        sas
      </button>
    </>
  );
};

export default Content;
