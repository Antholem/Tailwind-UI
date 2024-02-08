import globalState from '@/app/state';
import React, { FC } from 'react';

type BodyProps = {
    id: string;
    title: string;
    description: string;
    style: string;
    component: JSX.Element;
    clipboard: JSX.Element;
};

const Body: FC<BodyProps> = ({ id, title, description, component, clipboard, style }) => {
    const { darkMode } = globalState();

    return (
        <div id={id} className={style}>
            <div className='text-2xl font-medium'>
                {title}
            </div>
            <div>
                {description}
            </div>
            <div className={`border-solid border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-4 rounded-lg`}>
                {component}
            </div>
            <div>
                {clipboard}
            </div>
        </div>
    )
}

export default Body;