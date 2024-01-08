import React, { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl as dark, atomOneLight as light } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HiOutlineCheck, HiOutlineClipboard } from 'react-icons/hi';
import useDarkModeStore from '@/app/_store/theme-store';

type ClipboardProps = {
    sourceCode: string;
    header: string;
    onCopy: () => void;
    isCheck: boolean;
};

const Clipboard: FC<ClipboardProps> = ({ sourceCode, header, onCopy, isCheck }) => {
    const { darkMode } = useDarkModeStore();

    return (
        <div className={`max-w-2xl  bg-[${darkMode ? '#272f41' : '#f8f9fa'}] rounded-md overflow-hidden`}>
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
            <SyntaxHighlighter className='text-md' language="javascript" style={darkMode ? dark : light} wrapLongLines={false}>
                {sourceCode}
            </SyntaxHighlighter>
        </div>
    );
};

export default Clipboard;
