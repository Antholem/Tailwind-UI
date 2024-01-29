"use client"
import React, { useState } from 'react';
import { Header, Body } from '@/app/_layouts';
import { Clipboard } from '@/app/_components';
import List from './list';
import { useDarkMode } from '@/app/state';

const Button = () => {
    const [lastCopied, setLastCopied] = useState<number | null>(null);
    const { darkMode } = useDarkMode();

    const handleCopy = (index: number) => {
        setLastCopied(index);
    };

    const title = 'Button';
    const description = 'Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.';

    return (
        <div className='flex flex-col space-y-10'>
            <div>
                <Header
                    title={title}
                    description={description}
                />
            </div>
            <div>
                {List.map((item) => (
                    <Body
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        component={darkMode ? item.component.dark : item.component.light}
                        clipboard={
                            <Clipboard
                                sourceCode={item.source}
                                header={item.clipboard}
                                onCopy={() => handleCopy(item.id)}
                                isCheck={lastCopied === item.id}
                            />
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default Button;