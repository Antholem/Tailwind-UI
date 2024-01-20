import globalState from "@/app/state";

const theme = () => {
    const { darkMode } = globalState();
    const transition = 'duration-300 ease-in-out';

    // font colors
    const textDefault = darkMode ? 'text-white' : 'text-black';
    const textGray = darkMode ? 'text-gray-300' : 'text-gray-500';
    const textRed = darkMode ? 'text-red-400' : 'text-red-600';
    const textOrange = darkMode ? 'text-orange-300' : 'text-orange-500';
    const textYellow = darkMode ? 'text-yellow-200' : 'text-yellow-400';
    const textGreen = darkMode ? 'text-green-300' : 'text-green-500';
    const textTeal = darkMode ? 'text-teal-300' : 'text-teal-500';
    const textBlue = darkMode ? 'text-blue-300' : 'text-blue-600';
    const textCyan = darkMode ? 'text-cyan-300' : 'text-cyan-500';
    const textPurple = darkMode ? 'text-purple-300' : 'text-purple-600';
    const textPink = darkMode ? 'text-pink-300' : 'text-pink-500';

    // background colors
    const bgDefault = darkMode ? 'bg-white' : 'bg-black';
    const bgGray = darkMode ? 'bg-gray-300' : 'bg-gray-500';
    const bgRed = darkMode ? 'bg-red-400' : 'bg-red-600';
    const bgOrange = darkMode ? 'bg-orange-400' : 'bg-orange-500';
    const bgYellow = darkMode ? 'bg-yellow-200' : 'bg-yellow-400';
    const bgGreen = darkMode ? 'bg-green-300' : 'bg-green-500';
    const bgTeal = darkMode ? 'bg-teal-300' : 'bg-teal-500';
    const bgBlue = darkMode ? 'bg-blue-300' : 'bg-blue-600';
    const bgCyan = darkMode ? 'bg-cyan-300' : 'bg-cyan-500';
    const bgPurple = darkMode ? 'bg-purple-300' : 'bg-purple-600';
    const bgPink = darkMode ? 'bg-pink-300' : 'bg-pink-500';

    // pseudo class color
    const psDefault = darkMode ? `bg-white hover:bg-gray-200 active:bg-gray-300 ${transition}` : `bg-black hover:bg-gray-900 active:bg-gray-800 ${transition}`;
    const psGray = darkMode ? `bg-gray-300 hover:bg-gray-200 active:bg-gray-100 ${transition}` : `bg-gray-500 hover:bg-gray-400 active:bg-gray-300 ${transition}`;
    const psRed = darkMode ? `bg-red-400 hover:bg-red-500 active:bg-red-600 ${transition}` : `bg-red-600 hover:bg-red-700 active:bg-red-800 ${transition}`;
    const psOrange = darkMode ? `bg-orange-300 hover:bg-orange-400 active:bg-orange-500 ${transition}` : `bg-orange-500 hover:bg-orange-600 active:bg-orange-700 ${transition}`;
    const psYellow = darkMode ? `bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400 ${transition}` : `bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 ${transition}`;
    const psGreen = darkMode ? `bg-green-300 hover:bg-green-400 active:bg-green-500 ${transition}` : `bg-green-500 hover:bg-green-600 active:bg-green-700 ${transition}`;
    const psTeal = darkMode ? `bg-teal-300 hover:bg-teal-400 active:bg-teal-500 ${transition}` : `bg-teal-500 hover:bg-teal-600 active:bg-teal-700 ${transition}`;
    const psBlue = darkMode ? `bg-blue-300 hover:bg-blue-400 active:bg-blue-500 ${transition}` : `bg-blue-600 hover:bg-blue-700 active:bg-blue-800 ${transition}`;
    const psCyan = darkMode ? `bg-cyan-300 hover:bg-cyan-400 active:bg-cyan-500 ${transition}` : `bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 ${transition}`;
    const psPurple = darkMode ? `bg-purple-300 hover:bg-purple-400 active:bg-purple-500 ${transition}` : `bg-purple-600 hover:bg-purple-700 active:bg-purple-800 ${transition}`;
    const psPink = darkMode ? `bg-pink-300 hover:bg-pink-400 active:bg-pink-500 ${transition}` : `bg-pink-500 hover:bg-pink-600 active:bg-pink-700 ${transition}`;

    // custom dark mode
    const dark = darkMode ? 'bg-[#1a202c]' : 'bg-[#ffffff]'
    const altDark = darkMode ? 'bg-[#232b3b]' : 'bg-[#ebebeb]';

    return {
        textDefault,
        textGray,
        textRed,
        textOrange,
        textYellow,
        textGreen,
        textTeal,
        textBlue,
        textCyan,
        textPurple,
        textPink,
        bgDefault,
        bgGray,
        bgRed,
        bgOrange,
        bgYellow,
        bgGreen,
        bgTeal,
        bgBlue,
        bgCyan,
        bgPurple,
        bgPink,
        psDefault,
        psGray,
        psRed,
        psOrange,
        psYellow,
        psGreen,
        psTeal,
        psBlue,
        psCyan,
        psPurple,
        psPink,
        dark,
        altDark
    };
}

export default theme;