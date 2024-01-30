import globalState from '@/app/state';
import React from 'react';
// import theme from '@/app/theme';

const Home = () => {
  // const { text } = theme();
  const { darkMode } = globalState()

  return (
    <>
      {/* <button className={text.blue}>
        BUTTON
      </button> */}
      <h1>
        Home Page
        {darkMode ? "dark" : "light"}
      </h1>
    </>
  );
};

export default Home;
