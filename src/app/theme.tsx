import globalState from "./state";

const theme = () => {
    const { darkMode } = globalState();

    const text = {
        default: darkMode ? `text-white` : `text-black`,
    };

    return {
        text,
        // bg
    };
};

export default theme;