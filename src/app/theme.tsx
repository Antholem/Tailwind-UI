import globalState from "./state";

const theme = () => {
     const { darkMode } = globalState();

    const text = {
        default: 'text-black',
    };

    return {
        text,
        // bg
    };
};

export default theme;