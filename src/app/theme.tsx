import globalState from "@/app/state";

import React from 'react'

export const theme = () => {

    const { darkMode } = globalState()

    const color = {
        textDefault: darkMode ? 'text-white' : 'text-black',
        textGray: darkMode ? 'text-gray-300' : 'text-gray-500',
        textBlue: darkMode ? 'text-blue-300' : 'text-blue-600',
        textRed: darkMode ? 'text-red-300' : 'text-red-600',
        textOrange: darkMode ? 'text-orange-300' : 'text-orange-600',
        textYellow: darkMode ? 'text-6xl font-black' : 'text-md font-light',
        textGreen: darkMode ? 'text-green-300' : 'text-green-600',
    };


    return {
        color
    }
}


export default theme;