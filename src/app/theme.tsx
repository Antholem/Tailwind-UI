import globalState from "@/app/state";

const GetTheme = () => {
    const { darkMode } = globalState();

    const textNormal = darkMode ? 'text-white' : 'text-black';
    const textBlue = darkMode ? 'text-blue-300' : 'text-blue-600';
    const textGray = darkMode ? 'text-gray-200' : 'text-gray-400'; 

    const text = {
        default: textNormal,
        gray: textGray,
        blue: textBlue,
    };

    return {
        textNormal,
        textGray,
        textBlue,
        text
    };
}

export default GetTheme;