// theme.js
import globalState from "./state";

const theme = () => {
    const { darkMode } = globalState();

    const text = {
        default: darkMode ? 'text-white' : 'text-black',
    };

    return {
        text,
        // Add more styles as needed
    };
};

export default theme;
