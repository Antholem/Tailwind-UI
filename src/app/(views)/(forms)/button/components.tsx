import React from 'react';

const ButtonDark = () => {
    return (
        <button className='bg-blue-300 text-black p-2 rounded-md'>
            Button
        </button>
    );
};

const ButtonLight = () => {
    return (
        <button className='bg-blue-500 text-white p-2 rounded-md'>
            Button
        </button>
    );
};

export default {
    ButtonDark,
    ButtonLight
};