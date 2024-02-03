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
        <div>
            {map.map((component) => (
                <div key={component.id} className="mb-8">
                    <ul>
                        <li
                            key={component.id}
                            className={`my-2 px-2 py-1 text-sm font-medium`}
                        >
                            {component.title}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RightSideBar;
