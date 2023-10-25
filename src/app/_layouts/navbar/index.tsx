'use client';
import React from 'react';
import useDarkModeStore from '@/app/_store/theme-store';
import { FaSun, FaDiscord } from 'react-icons/fa';
import { RiGithubFill, RiMoonFill, RiYoutubeFill } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const { darkMode, setDarkMode } = useDarkModeStore();

    const toggleMode = () => {
        setDarkMode();
    };

    return (
        <nav className='p-4 shadow-md'>
            <div className='mx-auto flex justify-between items-center px-6'>
                <div className={`cursor-pointer inline md:hidden text-2xl ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}>
                    <GiHamburgerMenu />
                </div>
                <div className='hidden md:flex justify-start items-center space-x-3 cursor-pointer'>
                    <div>
                        <img className='w-10 h-10' src='/logo.png' alt='logo' />
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>
                            Tailwind UI
                        </p>
                    </div>
                </div>
                <div className='hidden items-center md:flex'>
                    <div className='relative'>
                        <input
                            type='text'
                            name='search'
                            id='search'
                            className={`${darkMode ? 'bg-[#2d3748]' : 'bg-white'} py-2 px-10 rounded-md border ${darkMode ? 'border-gray-700' : 'border-gray-100'} focus:border-blue-300 focus:outline-none shadow-md`}
                            placeholder='Search the docs'
                        />
                        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400'>
                            <GoSearch />
                        </div>
                    </div>
                </div>
                <div className='flex items-end justify-end md:space-x-5'>
                    <div onClick={toggleMode} className={`cursor-pointer text-2xl text-gray-${darkMode ? '200' : '400'}`}>
                        {darkMode ? <FaSun /> : <RiMoonFill />}
                    </div>
                    <div className={`cursor-pointer hidden md:inline text-2xl text-gray-${darkMode ? '200' : '400'}`}>
                        <RiGithubFill />
                    </div>
                    <div className={`cursor-pointer hidden md:inline text-2xl text-gray-${darkMode ? '200' : '400'}`}>
                        <FaDiscord />
                    </div>
                    <div className={`cursor-pointer hidden md:inline text-2xl text-gray-${darkMode ? '200' : '400'}`}>
                        <RiYoutubeFill />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
