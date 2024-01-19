import React from 'react';
import GetTheme from '@/app/theme';

const Content = () => {
  const { textBlue } = GetTheme();

  return (
    <>
      {/* <div className={`${text.pink} font-extrabold text-6xl`}>
        Landing Page

      </div> */}
      <button className={`${textBlue} p-4`}>
        sas
      </button>
    </>
  );
};

export default Content;