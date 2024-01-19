import globalState from '@/app/state';

const theme = () => {
    const { darkMode } = globalState();
    const transition = 'transition duration-300 ease-in-out';

    const text = {
        default: 'text-black',
        // gray: darkMode ? 'text-gray-300' : 'text-gray-500',
        // red: darkMode ? 'text-red-300' : 'text-red-600',
        // orange: darkMode ? 'text-orange-300' : 'text-orange-600',
        // yellow: darkMode ? 'text-yellow-200' : 'text-yellow-400',
        // green: darkMode ? 'text-green-300' : 'text-green-600',
        // teal: darkMode ? 'text-teal-200' : 'text-teal-500',
        // blue: darkMode ? 'text-blue-300' : 'text-blue-600',
        // cyan: darkMode ? 'text-cyan-300' : 'text-cyan-500',
        // purple: darkMode ? 'text-purple-300' : 'text-purple-500',
        // pink: darkMode ? 'text-pink-300' : 'text-pink-500'
    };

    // const bg = {
    //     default: darkMode ? `bg-white hover:bg-gray-200 active:bg-gray-400 ${transition}` : `bg-black hover:bg-gray-800 ${transition}`,
    //     gray: darkMode ? 'bg-gray-300' : 'bg-gray-500',
    //     red: darkMode ? 'bg-red-300' : 'bg-red-600',
    //     orange: darkMode ? 'bg-orange-300' : 'bg-orange-600',
    //     yellow: darkMode ? 'bg-yellow-200' : 'bg-yellow-400',
    //     green: darkMode ? 'bg-green-300' : 'bg-green-600',
    //     teal: darkMode ? 'bg-teal-200' : 'bg-teal-500',
    //     blue: darkMode ? 'bg-blue-300' : 'bg-blue-600',
    //     cyan: darkMode ? 'bg-cyan-300' : 'bg-cyan-500',
    //     purple: darkMode ? 'bg-purple-300' : 'bg-purple-500',
    //     pink: darkMode ? 'bg-pink-300' : 'bg-pink-500'
    // };

    return {
        text,
        // bg
    };
};

export default theme;