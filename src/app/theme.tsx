import globalState from "./state";

const theme = () => {
    const { darkMode } = globalState();

    const text = {
        default: `${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`,
    };

    return {
        text,
        // bg
    };
};

export default theme;