import React, { FC, ReactNode, HTMLProps, useState } from 'react';
import Link from 'next/link';
import globalState from '@/app/state';

type ComponentLinkProps = {
    href: string;
    children: ReactNode;
} & HTMLProps<HTMLDivElement>;

const ComponentLink: FC<ComponentLinkProps> = ({ children, href }) => {
    const { darkMode } = globalState();
    const [showLink, setShowLink] = useState(false);

    const showLinkHandler = () => {
        setShowLink(true);
    };

    const hideLinkHandler = () => {
        setShowLink(false);
    };

    const smoothScrollHandler = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='text-2xl flex flex-row space-x-2' onMouseEnter={showLinkHandler} onMouseLeave={hideLinkHandler}>
            <div className='font-medium'>
                {children}
            </div>
            <div onClick={() => smoothScrollHandler(href)}>
                <Link
                    className={`${showLink ? 'inline' : 'hidden'} ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}
                    href={`#${href}`}
                    onClick={(e) => e.preventDefault()}>
                    #
                </Link>
            </div>
        </div>
    );
};

export default ComponentLink;
