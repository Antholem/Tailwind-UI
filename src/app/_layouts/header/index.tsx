import React, { FC } from 'react';
import globalState from '@/app/state';

type HeaderProps = {
    title: string;
    description: string;
};

const Header: FC<HeaderProps> = ({ title, description }) => {
    const { darkMode } = globalState();

    return (
        <div className='flex flex-col space-y-6'>
            <div className='text-3xl font-bold'>
                {title}
            </div>
            <div className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {description}
            </div>
        </div>
    );
};

export default Header;