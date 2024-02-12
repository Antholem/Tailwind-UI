import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import globalState from '@/app/state';

const Footer = () => {
    const { darkMode } = globalState();
    const currentYear = new Date().getFullYear();

    const SocialIcons = [
        {
            id: 'twitter',
            icon: <FaTwitter />,
        },
        {
            id: 'github',
            icon: <FaGithub />,
        },
        {
            id: 'linkedin',
            icon: <FaLinkedin />,
        },
        {
            id: 'youtube',
            icon: <FaYoutube />,
        },
    ];

    return (
        <div className='py-2'>
            <div className='mb-10'>
                <hr className={`${darkMode ? 'border-gray-600' : 'border-gray-300'}`} />
            </div>
            <div className='flex flex-col justify-center items-center space-y-6'>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    Made by Sam Manalo
                    <span className={`${darkMode ? 'text-blue-200' : 'text-blue-400'}`}>
                        {' '}@{currentYear}
                    </span>
                </div>
                <div className='flex flex-row space-x-6'>
                    {SocialIcons.map((item) => (
                        <div key={item.id}>
                            <div id={item.id} className={`cursor-pointer ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}>
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;