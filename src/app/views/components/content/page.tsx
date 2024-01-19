import React from 'react';
import theme from '@/app/theme';

const Content = () => {
  const { text } = theme();

  return (
    <>
      <div className={`${text.pink} font-extrabold text-6xl`}>
        Landing Page

      </div>
      {/* <button className={`${bg.default} p-4`}>
        sas
      </button> */}
    </>
  );
};

export default Content;