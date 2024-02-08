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

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='px-2'>
            <ul>
                {map.map((component) => (
                    <li
                        key={component.id}
                        className={`my-2 px-2 py-1 text-sm`}
                        onClick={() => handleClick(component.id)}
                    >
                        <a href={`#${component.id}`} onClick={(e) => e.preventDefault()}>
                            {component.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightSideBar;
