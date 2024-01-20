import globalState from "@/app/state";

const theme = {
    textDefault: globalState.getState().darkMode ? 'text-white' : 'text-black',
    textGray: globalState.getState().darkMode ? 'text-gray-300' : 'text-gray-500',
    textBlue: globalState.getState().darkMode ? 'text-blue-300' : 'text-blue-600',
    textRed: globalState.getState().darkMode ? 'text-red-300' : 'text-red-600',
    textOrange: globalState.getState().darkMode ? 'text-orange-300' : 'text-orange-600',
    textYellow: globalState.getState().darkMode ? 'text-yellow-200' : 'text-yellow-400',
    textGreen: globalState.getState().darkMode ? 'text-green-300' : 'text-green-600',
};

export default theme;
