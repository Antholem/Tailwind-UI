import globalState from "@/app/state";

const theme = () => {
    const { darkMode } = globalState();

    const text_default = darkMode ? 'text-white' : 'text-black';
    const text_gray = darkMode ? 'text-gray-300' : 'text-gray-500';
    const text_blue = darkMode ? 'text-blue-300' : 'text-blue-600';
    const text_red = darkMode ? 'text-red-300' : 'text-red-600';
    const text_orange = darkMode ? 'text-orange-300' : 'text-orange-600';
    const text_yellow = darkMode ? 'text-yellow-200' : 'text-yellow-400';
    const text_green = darkMode ? 'text-green-300' : 'text-green-600';

    return {
        text: {
            text_default,
            text_gray,
            text_blue,
            text_red,
            text_orange,
            text_yellow,
            text_green,
        }
    };
}

export default theme;
