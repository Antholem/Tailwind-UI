import React from 'react';
import Link from 'next/link';
import globalState from '@/app/state';

type ComponentItem = {
    id: string;
    title: string | null;
};

type RightSideBarProps = {
    map: ComponentItem[];
};

const RightSideBar: React.FC<RightSideBarProps> = ({ map }) => {
    const { darkMode } = globalState();
    const highlighter = `bg-blue-300 bg-opacity-30 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`;

    const smoothScrollHandler = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='px-2 py-4 flex flex-col space-y-2'>
            <div>
                <p className={`px-2 text-sm uppercase font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}>
                    Contents
                </p>
            </div>
            <div>
                <ul>
                    {map.map((component, index) => (
                        component.title && (
                            <li
                                key={component.id}
                                className={`my-2 px-2 py-1 text-sm font-medium cursor-pointer rounded-md hover:bg-blue-300 hover:bg-opacity-30 transition duration-300 ease-in-out ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
                                onClick={() => smoothScrollHandler(component.id)}
                            >
                                <Link key={index} href={`#${component.id}`} onClick={(e) => e.preventDefault()}>
                                    {component.title}
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RightSideBar;
