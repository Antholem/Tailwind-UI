import globalState from "@/app/state";

const theme = () => {
    var { darkMode } = globalState();

    var text = {
        default: darkMode ? 'text-white' : 'text-black',
    };

    return {
        text
    };
}

export default theme;