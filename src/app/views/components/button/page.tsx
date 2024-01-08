"use client"
import React, { useState } from 'react'
import { Clipboard } from '@/app/_layouts'

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

    return (
        <div>
            <p>Button</p>
            <div>
                <button className='bg-blue-400 p-2 rounded-md'>
                    Button
                </button>
            </div>
            <Clipboard
                sourceCode={codeString}
                header={'Sample Headers'}
                onCopy={() => handleCopy(1)}
                isCheck={lastCopied === 1}
            />
        </div>
    )
}

export default Button