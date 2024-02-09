import React, { FC } from 'react';
import globalState from '@/app/state';

type BodyProps = {
    id: string;
    title: string;
    description: string;
    component: JSX.Element;
    clipboard: JSX.Element;
};

const Body: FC<BodyProps> = ({ id, title, description, component, clipboard }) => {
    const { darkMode } = globalState();

    return (
        <div id={id} className='flex flex-col space-y-4 py-6'>
            <div className='text-2xl font-medium'>
                {title}
            </div>
            <div>
                {description}
            </div>
            <div className={`border-solid border p-4 rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                {component}
            </div>
            <div>
                {clipboard}
            </div>
        </div>
    );
};

export default Body;