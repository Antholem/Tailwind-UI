import globalState from '@/app/state';
import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

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
            <div className='flex flex-col space-y-6 justify-center items-center'>
                <div className='text-sm'>
                    Made by Sam Manalo
                    <span className={`${darkMode ? 'text-blue-200' : 'text-blue-900'}`}>
                        {' '}@{currentYear}
                    </span>
                </div>
                <div className='flex flex-row space-x-6'>
                    {SocialIcons.map((item) => (
                        <div key={item.id}>
                            <div id={item.id} className={`${darkMode ? 'text-gray-200' : 'text-gray-400'} cursor-pointer`}>
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer