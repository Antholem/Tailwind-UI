import React, { FC } from 'react';

type HeaderProps = {
    title: string;
    description: string;
};

const Header: FC<HeaderProps> = ({ title, description }) => {
    return (
        <div className='flex flex-col space-y-6'>
            <div className='text-3xl font-bold'>
                {title}
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}

export default Header;