import globalState from '@/app/state';
import theme from '@/app/theme';
import React, { FC, ReactNode, HTMLProps } from 'react';

type IconButtonProps = {
    children: ReactNode;
} & HTMLProps<HTMLDivElement>;

const IconButton: FC<IconButtonProps> = ({ children, ...rest }) => {
    const color = theme();

    return (
        <div className='cursor-pointer relative'>
            <div className='relative'>
                <div className={`p-2 ${color.textGray}`}>
                    {children}
                </div>
                <div {...rest} className='absolute inset-0 rounded-lg bg-gray-400 opacity-0 hover:opacity-30 transition-opacity duration-300 active:bg-gray-500' />
            </div>
        </div>
    );
};

export default IconButton;
