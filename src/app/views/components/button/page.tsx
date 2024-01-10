"use client"
import React, { useState } from 'react'
import { Clipboard } from '@/app/_layouts'
import GetTheme from '@/app/_components/theme'

const Button = () => {
    const [lastCopied, setLastCopied] = useState<number | null>(null);

    const codeString = `<div>
    <button className='bg-blue-400 p-2 rounded-md'>
        Button
    </button>
</div>`;

    const handleCopy = (index: number) => {
        setLastCopied(index);
    };

    const { textSecondary, textPrimary } = GetTheme();

    return (
        <div className='flex flex-col space-y-10'>
            <div>
                <div className='flex flex-col space-y-6'>
                    <div className='text-3xl font-bold'>
                        Button
                    </div>
                    <div>
                        Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col space-y-6'>
                    <div className='text-2xl font-medium'>
                        Usage
                    </div>
                    <p className={`${textPrimary}`}>
                        AISBAUISBAIUSBAUISBAISBAOINSA
                    </p>
                    <div className=''>
                        For basic button, add background color, padding, and border radius only.
                    </div>
                    <div className='border-solid border  border-gray-600 p-4 rounded-lg'>
                        <button className='bg-blue-400 p-2 rounded-md'>
                            Button
                        </button>
                    </div>
                    <div>
                        <Clipboard
                            sourceCode={codeString}
                            header={'Sample Headers'}
                            onCopy={() => handleCopy(1)}
                            isCheck={lastCopied === 1}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Button