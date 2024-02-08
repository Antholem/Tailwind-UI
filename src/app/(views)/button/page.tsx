"use client"
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Body, Header } from '@/app/_layouts';
import ButtonList from './list';
import globalState from '@/app/state';
import RightSideBar from '@/app/_layouts/navigation/rightsidebar';
import { Clipboard } from '@/app/_components';
import Footer from '@/app/_layouts/footer';

const Button = () => {
    const [lastCopied, setLastCopied] = useState<number | null>(null);
    // const [scrollLocation, setScrollLocation] = useState<string>('');

    const handleCopy = (index: number) => {
        setLastCopied(index);
    };

    const { darkMode } = globalState();
    // const scrollRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (!scrollRef.current) return;
    //         const viewportHeight = scrollRef.current.clientHeight;
    //         const scrollPosition = scrollRef.current.scrollTop; // Calculate scroll position relative to the center of the viewport
    //         const buttonItems = scrollRef.current.getElementsByClassName('scroll-item');
    //         for (let i = 0; i < buttonItems.length; i++) {
    //             const item = buttonItems[i] as HTMLElement;
    //             const itemHeight = item.clientHeight;
    //             const offsetTop = item.offsetTop - viewportHeight / 2 + itemHeight / 2; // Adjust offsetTop to center of viewport
    //             const offsetBottom = offsetTop + itemHeight;
    //             if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
    //                 setScrollLocation(item.id);
    //                 break;
    //             }
    //         }
    //     };

    //     if (scrollRef.current) {
    //         scrollRef.current.addEventListener('scroll', handleScroll);
    //     }

    //     return () => {
    //         if (scrollRef.current) {
    //             scrollRef.current.removeEventListener('scroll', handleScroll);
    //         }
    //     };
    // }, []);

    return (
        <Fragment>
            <div className='flex flex-1 flex-col space-y-6 overflow-y-auto px-6 md:px-10 py-10' 
            // ref={scrollRef}
            >
                <div>
                    <Header
                        title={ButtonList.ButtonHeader.title}
                        description={ButtonList.ButtonHeader.description}
                    />
                </div>
                <div>
                    {ButtonList.ButtonItems.map((item) => (
                        <Body
                            id={item.id}
                            key={item.id}
                            style='flex flex-col space-y-4 py-6'
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
            {/* <div className='overflow-y-auto hidden md:inline w-[20%]'>
                <RightSideBar 
                    map={ButtonList.ButtonItems}
                    highlight={'scrollLocation'}
                />
            </div> */}
        </Fragment>
    );
}

export default Button;
