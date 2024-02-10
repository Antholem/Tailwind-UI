import React, { FC, ReactNode, HTMLProps } from 'react';

type FragmentProps = {
    children: ReactNode;
} & HTMLProps<HTMLDivElement>;

const Body: FC<FragmentProps> = ({ children }) => {
    return (
        <div className='px-6 md:px-10 py-10 flex flex-1 flex-col space-y-6 overflow-y-auto'>
            {children}
        </div>
    );
};

const Sidebar: FC<FragmentProps> = ({ children }) => {
    return (
        <div className='overflow-y-auto hidden md:inline w-[20%]'>
            {children}
        </div>
    );
};

export default {
    Body,
    Sidebar
};