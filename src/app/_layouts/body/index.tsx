import React, { FC } from 'react';
import globalState from '@/app/state';
import { ComponentLink } from '@/app/_components';

type BodyProps = {
    id: string;
    href: string;
    title: string;
    description: string;
    component: JSX.Element | null;
    clipboard: JSX.Element;
};

const Body: FC<BodyProps> = ({ id, title, href, description, component, clipboard }) => {
    const { darkMode } = globalState();

    return (
        <div id={id} className='flex flex-col space-y-4 py-6'>
            <ComponentLink href={href}>
                {title}
            </ComponentLink>
            <div>
                {description}
            </div>
            {component &&
                <div className={`border-solid border p-4 rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                    {component}
                </div>
            }
            <div>
                {clipboard}
            </div>
        </div>
    );
};

export default Body;