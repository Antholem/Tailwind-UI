import React from 'react';
import theme from '@/app/theme';

const Content = () => {
  const { textOrange } = theme();

  return (
    <>
      <button className={`${textOrange} p-4`}>
        sas
      </button>
    </>
  );
};

export default Content;
