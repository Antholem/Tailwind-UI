// theme.js

import globalState from "@/app/state";

const getTheme = () => {
    const { darkMode } = globalState();

    const text = {
        default: darkMode ? 'text-white' : 'text-black',
    };

    return {
        text,
    };
};

export default getTheme;
