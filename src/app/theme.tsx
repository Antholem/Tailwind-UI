import globalState from "@/app/state";

const theme = () => {
    const { darkMode } = globalState();

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

    };
}

export default theme;