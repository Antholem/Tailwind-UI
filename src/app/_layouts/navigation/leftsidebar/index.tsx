import React from 'react';
import Components from '../list';
import globalState from '@/app/state';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LeftSideBar = () => {
    const { darkMode } = globalState();

    const currentPath = usePathname();

    const highlighter = `rounded-md bg-blue-300 bg-opacity-30 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`;

    return (
        <div>
            {Components.map((component) => (
                <div key={component.category} className="mb-8">
                    <div>
                        <p className={`uppercase px-2 mb-3 text-sm ${darkMode ? 'text-blue-300' : 'text-blue-500'} font-semibold`}>
                            {component.category}
                        </p>
                    </div>
                    <ul>
                        {component.list.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <li
                                    id={item.id}
                                    key={index}
                                    className={`my-2 px-2 py-1 text-sm font-medium ${currentPath === item.link ? highlighter : 'bg-transparent'}`}
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
