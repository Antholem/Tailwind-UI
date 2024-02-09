const ButtonHeader = {
    title: 'Button',
    describe: 'The button component serves as a catalyst for various actions or events, including but not limited to submitting forms, initiating dialogues, cancelling processes, or executing deletion tasks.',
};

const ButtonComponents = [
    {
        id: 'button_usage',
        sourceNo: 0,
        title: 'Usage',
        description: 'For basic button, add background color, padding, and border radius only.',
        component: {
            dark: <button className='bg-blue-300 text-black p-2 rounded-md'>Button</button>,
            light: <button className='bg-blue-500 text-white p-2 rounded-md'>Button</button>
        },
        clipboard: 'Button',
        source: {
            dark: `<div>\n\t<button className='bg-blue-300 p-2 rounded-md'>\n\t\tButton\n\t</button>\n</div>`,
            light: `<div>\n\t<button className='bg-blue-500 p-2 rounded-md'>\n\t\tButton\n\t</button>\n</div>`
        },
    },
    {
        id: 'button_sizes',
        sourceNo: 1,
        title: 'Button Sizes',
        description: 'For basic button, add background color, padding, and border radius only.',
        component: {
            dark: <button className='bg-blue-300 text-black p-2 rounded-md'>Button</button>,
            light: <button className='bg-blue-500 text-white p-2 rounded-md'>Button</button>
        },
        clipboard: 'Button',
        source: {
            dark: `<div>\n\t<button className='bg-blue-300 p-2 rounded-md'>\n\t\tButton\n\t</button>\n</div>`,
            light: `<div>\n\t<button className='bg-blue-500 p-2 rounded-md'>\n\t\tButton\n\t</button>\n</div>`
        },
    },
];

export default { ButtonHeader, ButtonComponents }