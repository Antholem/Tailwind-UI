import React, { FC } from 'react';
import globalState from '@/app/state';
import { ComponentLink } from '@/app/_components';

type BodyProps = {
    id: string;
    bulletNum: string | null;
    href: string;
    title: string | null;
    subtitle: string | null;
    description: string;
    component: JSX.Element | null;
    clipboard: JSX.Element;
};

const Body: FC<BodyProps> = ({ id, bulletNum, title, subtitle, href, description, component, clipboard }) => {
    const { darkMode } = globalState();

    return (
        <div id={id} className={`flex flex-col space-y-4 ${title ? 'py-6' : 'py-2 pb-6'}`}>
            {title &&
                <ComponentLink href={href}>
                    {title}
                </ComponentLink>}
            {subtitle &&
                <div className={`flex flex-row space-x-4 items-center ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {
                        bulletNum &&
                        <div className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-[#232B3B]' : 'bg-[#EBEBEB]'}`}>
                            {bulletNum}
                        </div>}
                    <div className={`text-lg ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {subtitle}
                    </div>
                </div>
            }
            <div className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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