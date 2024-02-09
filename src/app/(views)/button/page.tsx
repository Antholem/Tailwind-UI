'use client';
import React, { Fragment, useState } from 'react';
import { Header, Body, Footer, RightSideBar } from '@/app/_layouts';
import { ButtonList as List } from '@/app/(views)/';
import { Clipboard } from '@/app/_components';
import globalState from '@/app/state';

const Button = () => {
    const [lastCopied, setLastCopied] = useState<number | null>(null);
    const { darkMode } = globalState();

    const handleCopy = (index: number) => {
        setLastCopied(index);
    };

    return (
        <Fragment>
            <div className='px-6 md:px-10 py-10 flex flex-1 flex-col space-y-6 overflow-y-auto'>
                <div>
                    <Header
                        title={List.ButtonHeader.title}
                        description={List.ButtonHeader.describe}
                    />
                </div>
                <div>
                    {List.ButtonComponents.map((item) => (
                        <Body
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            component={darkMode ? item.component.dark : item.component.light}
                            clipboard={
                                <Clipboard
                                    sourceCode={item.source}
                                    header={item.clipboard}
                                    onCopy={() => handleCopy(item.sourceNo)}
                                    isCheck={lastCopied === item.sourceNo}
                                />
                            }
                        />
                    ))}
                </div>
                <div>
                    <Footer />
                </div>
            </div>
            <div className='overflow-y-auto hidden md:inline w-[20%]'>
                <RightSideBar map={List.ButtonComponents} />
            </div>
        </Fragment>
    );
};

export default Button;
