"use client"
import React, { Fragment, useState } from 'react';
import { Clipboard } from '@/app/_components/';
import useDarkModeStore from '@/app/_store/theme-store';

const Page = () => {
  const codeString = `"use client"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/prism";

return (
  <SyntaxHighlighter language="javascript" style={docco}>
    Hello World, this is Tailwind UI
  </SyntaxHighlighter>
);
  `;

  const sampleCode = `
  return (
    <Button>Click Me!</Button>
  );
  `;

  const { darkMode, setDarkMode, bgColor } = useDarkModeStore();
  const [lastCopied, setLastCopied] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setLastCopied(index);
  };

  const toggleMode = () => {
    setDarkMode();
  };

  return (
    <div className={`bg-white ${darkMode && 'dark-mode'}`}>
      <Clipboard
        sourceCode={codeString}
        header={'Sample Clipboard Number 1'}
        onCopy={() => handleCopy(1)}
        isCheck={lastCopied === 1}
      />
      <Clipboard
        sourceCode={sampleCode}
        header={'Sample Clipboard Number 2'}
        onCopy={() => handleCopy(2)}
        isCheck={lastCopied === 2}
      />
      <button className={`bg-primary-${bgColor} rounded-md p-2 m-2`} onClick={toggleMode}>
        {darkMode ? 'Dark' : 'Light'} Mode
      </button>
      <p>Hello</p>
    </div>
  );
};

export default Page;
