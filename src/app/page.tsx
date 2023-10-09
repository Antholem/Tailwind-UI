"use client"
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Component = () => {
  const codeString = `
"use client"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/prism";

return (
  <SyntaxHighlighter language="javascript" style={docco}>
    asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  </SyntaxHighlighter>
);
  `;

  return (
    <div className='max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden'>
      <div className='flex justify-between px-4 text-white text-xs items-center'>
        <p className='text-sm'>Example</p>
        <button className='py-1 inline-flex items-center gap-1'>
          Copy Code
        </button>
      </div>
      <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLongLines={true} >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Component;
