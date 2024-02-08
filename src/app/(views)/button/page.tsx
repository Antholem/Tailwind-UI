"use client"
import React, { Fragment, useState } from 'react';
import { Header, Body } from '@/app/_layouts';
import { Clipboard } from '@/app/_components';
import List from './list';
import globalState from '@/app/state';
import RightSideBar from '@/app/_layouts/navigation/rightsidebar';
import ButtonItems from './list';
import Footer from '@/app/_layouts/footer';

const Button = () => {
    const [lastCopied, setLastCopied] = useState<number | null>(null);
    const { darkMode } = globalState();

    const handleCopy = (index: number) => {
        setLastCopied(index);
    };

    const title = 'Button';
    const description = 'Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.';

    return (
        <Fragment>
            <div className='flex flex-1 flex-col space-y-6 overflow-y-auto px-6 md:px-10 py-10'>
                <div>
                    <Header
                        title={title}
                        description={description}
                    />
                </div>
                <div>
                    {List.map((item) => (
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
                <RightSideBar map={ButtonItems} highlight='s' />
            </div>
        </Fragment>
    );
}

export default Button;
