import React from 'react';
import globalState from '@/app/state';

type ComponentItem = {
    id: string;
    title: string;
};

type RightSideBarProps = {
    map: ComponentItem[];
};

const RightSideBar: React.FC<RightSideBarProps> = ({ map }) => {
    const { darkMode } = globalState();

    return (
        <div className='px-2'>
            {map.map((component) => (
                <div key={component.id} >
                    <ul>
                        <li
                            key={component.id}
                            className={`my-2 px-2 py-1 text-sm font-medium`}
                        >
                            <a href={`#${component.id}`}>
                                {component.title}
                            </a>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RightSideBar;
