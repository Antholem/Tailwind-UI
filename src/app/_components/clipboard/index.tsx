import React, { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl as dark, atomOneLight as light } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HiOutlineCheck, HiOutlineClipboard } from 'react-icons/hi';
import globalState from '@/app/state';

type ClipboardProps = {
    sourceCode: string;
    header: string;
    onCopy: () => void;
    isCheck: boolean;
};

const Clipboard: FC<ClipboardProps> = ({ sourceCode, header, onCopy, isCheck }) => {
    const { darkMode } = globalState();

    return (
        <div className={`bg-[${darkMode ? '#272f41' : '#f8f9fa'}] rounded-md overflow-hidden border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
            <div className={`flex justify-between px-4 py-1 text-xs items-center ${darkMode ? 'bg-[#232b3b]' : 'bg-[#ebebeb]'}`}>
                <p className='text-xs'>
                    {header}
                </p>
                <CopyToClipboard text={sourceCode} onCopy={onCopy}>
                    <button className='py-1 inline-flex items-center gap-1'>
                        {isCheck ? <HiOutlineCheck /> : <HiOutlineClipboard />}
                        <p className='text-xs'>
                            Copy Code
                        </p>
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter className='text-md p-8' language='javascript' style={darkMode ? dark : light} wrapLongLines={false}>
                {sourceCode}
            </SyntaxHighlighter>
        </div>
    );
};

export default Clipboard;
