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
           
        </Fragment>
    );
}

export default Button;
