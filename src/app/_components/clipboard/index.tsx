import React, { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HiOutlineCheck, HiOutlineClipboard } from 'react-icons/hi';

type ClipboardProps = {
    sourceCode: string;
    header: string;
    onCopy: () => void;
    isCheck: boolean;
};

const Clipboard: FC<ClipboardProps> = ({ sourceCode, header, onCopy, isCheck }) => {
    return (
        <div className='max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden'>
            <div className='flex justify-between px-4 py-1 text-white text-xs items-center'>
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
            <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLongLines={true}>
                {sourceCode}
            </SyntaxHighlighter>
        </div>
    );
};

export default Clipboard;
