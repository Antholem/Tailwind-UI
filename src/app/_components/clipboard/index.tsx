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
        <div className={`overflow-hidden rounded-md border ${darkMode ? 'bg-[#272F41] border-gray-600' : 'bg-[#F8F9FA] border-gray-300'}`}>
            <div className={`flex justify-between px-4 py-1 text-xs items-center ${darkMode ? 'bg-[#232B3B]' : 'bg-[#EBEBEB]'}`}>
                <p className='text-xs'>
                    {header}
                </p>
                <CopyToClipboard text={sourceCode} onCopy={onCopy}>
                    <button className='inline-flex items-center gap-1 py-1'>
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
