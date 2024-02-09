import React from 'react';

const ButtonSourceDark = () => {
    return (
        `<div>
\t<button className="bg-blue-300 p-2 rounded-md">
\t\tButton
\t</button>
</div>`
    );
};

const ButtonSourceLight = () => {
    return (
        `<div>
\t<button className="bg-blue-500 p-2 rounded-md">
\t\tButton
\t</button>
</div>`
    );
};

export default {
    ButtonSourceDark,
    ButtonSourceLight
}