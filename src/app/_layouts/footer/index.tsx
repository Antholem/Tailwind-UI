import globalState from '@/app/state';
import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const { darkMode } = globalState();
    const currentYear = new Date().getFullYear();

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
                    <div className={`${darkMode ? 'text-gray-200' : 'text-gray-400'} cursor-pointer`}>
                        <FaTwitter />
                    </div>
                    <div className={`${darkMode ? 'text-gray-200' : 'text-gray-400'} cursor-pointer`}>
                        <FaGithub />
                    </div>
                    <div className={`${darkMode ? 'text-gray-200' : 'text-gray-400'} cursor-pointer`}>
                        <FaLinkedin />
                    </div>
                    <div className={`${darkMode ? 'text-gray-200' : 'text-gray-400'} cursor-pointer`}>
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer