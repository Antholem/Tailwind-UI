import React from 'react';
import GetTheme from '@/app/theme';

const Content = () => {
  const { textBlue, text } = GetTheme();

  return (
    <>
      {/* <div className={`${text.pink} font-extrabold text-6xl`}>
        Landing Page

      </div> */}
      <button className={`${text.blue} p-4`}>
        sas
      </button>
    </>
  );
};

export default Content;