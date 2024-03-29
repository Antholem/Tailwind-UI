import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Components } from '@/app/_layouts';
import globalState from '@/app/state';

const LeftSideBar = () => {
    const { darkMode } = globalState();
    const currentPath = usePathname();
    const highlighter = `bg-blue-300 bg-opacity-30 hover:bg-opacity-40 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`;

    return (
        <div>
            {Components.map((component) => (
                <div key={component.category} className='mb-8'>
                    <div>
                        <p className={`px-2 mb-3 text-sm uppercase font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}>
                            {component.category}
                        </p>
                    </div>
                    <ul>
                        {component.list.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <li
                                    id={item.id}
                                    key={index}
                                    className={`my-2 px-2 py-1 text-sm font-medium rounded-md hover:bg-blue-300 hover:bg-opacity-30 transition duration-300 ease-in-out ${currentPath === item.link ? highlighter : 'bg-transparent'} `}
                                >
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default LeftSideBar;
