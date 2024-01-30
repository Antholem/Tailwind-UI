import { useDarkMode } from '@/app/store';
import React from 'react';
// import theme from '@/app/theme';

const Home = () => {
  // const { text } = theme();
  const { darkMode } = useDarkMode()

  return (
    <>
      {/* <button className={text.blue}>
        BUTTON
      </button> */}
      <h1>
        Home Page {darkMode ? "dark" : "light"}
      </h1>
    </>
  );
};

export default Home;
