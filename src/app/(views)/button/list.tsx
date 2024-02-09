const ButtonHeader = {
    title: 'Button',
    describe: 'Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.',
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
        source: `<div>\n\t<button className='bg-blue-400 p-2 rounded-md'>\n\t\tButton\n\t</button>\n</div>`
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
        source: `<div>\n\t<button className='bg-blue-400 p-2 rounded-md'>\n\t\tButton\n\t</button>\n</div>`
    },
];

export default { ButtonHeader, ButtonComponents }