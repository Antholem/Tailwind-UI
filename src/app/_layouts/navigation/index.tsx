import React, { FC, ReactNode, useState } from 'react';
import Link from 'next/link';
import { MdOutlineClose } from 'react-icons/md';
import { FaSun, FaDiscord } from 'react-icons/fa';
import { RiGithubFill, RiMoonFill, RiYoutubeFill } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import globalState from '@/app/state';
import { LeftSideBar } from '@/app/_layouts';

type NavProps = {
    children: ReactNode;
};

const Navigation: FC<NavProps> = ({ children }) => {
    const { darkMode, setDarkMode } = globalState();
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleMode = () => {
        setDarkMode();
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className='flex flex-col h-screen'>
            <div className={`p-4 shadow-md sticky top-0 ${showSidebar ? '' : 'z-50'} ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <div className='flex justify-between items-center mx-auto px-6'>
                    <div className='inline md:hidden' onClick={toggleSidebar}>
                        <div className='cursor-pointer relative'>
                            <div className='relative'>
                                <div className={`p-2 ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}>
                                    <div className='text-2xl'>
                                        <GiHamburgerMenu />
                                    </div>
                                </div>
                                <div className='absolute inset-0 rounded-lg bg-gray-400 opacity-0 hover:opacity-30 duration-300 active:bg-gray-500 transition-opacity'/>
                            </div>
                        </div>
                    </div>
                    <Link href='/'>
                        <div className='flex justify-start items-center space-x-3 cursor-pointer'>
                            <div>
                                <img className='w-7 md:w-10 h-7 md:h-10' src='/logo.png' alt='logo'/>
                            </div>
                            <div>
                                <p className='text-lg md:text-xl font-semibold'>
                                    Tailwind UI
                                </p>
                            </div>
                        </div>
                    </Link>
                    <div className='hidden md:flex items-center'>
                        <div className='relative'>
                            <input
                                type='text'
                                name='search'
                                id='search'
                                className={`py-2 px-10 rounded-md border shadow-md focus:border-blue-300 focus:outline-none ${darkMode ? 'bg-[#2d3748] border-gray-700' : 'bg-white border-gray-100'}`}
                                placeholder='Search the docs'
                            />
                            <div className='text-gray-400 pl-4 pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                                <GoSearch />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end justify-end md:space-x-5'>
                        <div onClick={toggleMode} className='cursor-pointer relative'>
                            <div className='relative'>
                                <div className={`p-2 ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}>
                                    <div className='text-2xl'>
                                        {darkMode ? <FaSun /> : <RiMoonFill />}
                                    </div>
                                </div>
                                <div className='absolute inset-0 rounded-lg bg-gray-400 opacity-0 hover:opacity-30 active:bg-gray-500 transition-opacity duration-300'/>
                            </div>
                        </div>
                        <div className='cursor-pointer relative hidden md:inline'>
                            <div className='relative'>
                                <div className={`p-2 ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}>
                                    <div className='text-2xl'>
                                        <RiGithubFill />
                                    </div>
                                </div>
                                <div className='absolute inset-0 rounded-lg bg-gray-400 opacity-0 hover:opacity-30 active:bg-gray-500 transition-opacity duration-300'/>
                            </div>
                        </div>
                        <div className='cursor-pointer relative hidden md:inline'>
                            <div className='relative'>
                                <div className={`p-2 ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}>
                                    <div className='text-2xl'>
                                        <FaDiscord />
                                    </div>
                                </div>
                                <div className='absolute inset-0 rounded-lg bg-gray-400 opacity-0 hover:opacity-30 active:bg-gray-500 transition-opacity duration-300'/>
                            </div>
                        </div>
                        <div className='cursor-pointer relative hidden md:inline'>
                            <div className='relative'>
                                <div className={`p-2 ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}>
                                    <div className='text-2xl'>
                                        <RiYoutubeFill />
                                    </div>
                                </div>
                                <div className='absolute inset-0 rounded-lg bg-gray-400 opacity-0 hover:opacity-30 active:bg-gray-500 transition-opacity duration-300'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 overflow-y-auto'>
                <div className={`px-4 py-4 overflow-y-auto md:w-1/5 absolute md:static shadow-lg bottom-0 top-0 left-0 right-20 transition-transform duration-300 ease-in-out transform ${darkMode ? 'bg-[#232c3b] md:bg-inherit' : 'bg-[#ffffff] md:bg-inherit'} ${showSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                    <div className='flex flex-col space-y-1'>
                        <div className='flex md:hidden justify-end'>
                            <div onClick={toggleSidebar} className='relative cursor-pointer'>
                                <div className={`cursor-pointer ${darkMode ? 'text-gray-200' : 'text-gray-400'}`}>
                                    <div className='text-2xl'>
                                        <MdOutlineClose />
                                    </div>
                                </div>
                                <div className='absolute inset-0 rounded-lg bg-gray-400 opacity-0 hover:opacity-30 transition-opacity duration-300 active:bg-gray-500' />
                            </div>
                        </div>
                        <div>
                            <LeftSideBar />
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 flex-row overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
