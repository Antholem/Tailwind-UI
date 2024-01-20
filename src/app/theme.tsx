import globalState from "@/app/state";

const theme = () => {
    const { darkMode } = globalState();

    const colors = {
        textDefault: darkMode ? 'text-white' : 'text-black',
        textGray: darkMode ? 'text-gray-300' : 'text-gray-500',
        textBlue: darkMode ? 'text-blue-300' : 'text-blue-600',
        textRed: darkMode ? 'text-red-300' : 'text-red-600',
        textOrange: darkMode ? 'text-orange-300' : 'text-orange-600',
        textYellow: darkMode ? 'text-yellow-200' : 'text-yellow-400',
        textGreen: darkMode ? 'text-green-300' : 'text-green-600',
    };

    return colors;
}

export default theme;
