// theme.js

import { useDarkMode } from "./state";

const theme = () => {
    const { darkMode } = useDarkMode();

    const text = {
        default: darkMode ? 'text-red-400' : 'text-blue-500',
    };

    return {
        text,
        // Add more styles as needed
    };
};

export default theme;
