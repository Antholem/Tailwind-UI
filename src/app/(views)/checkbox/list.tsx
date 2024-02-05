const CheckboxItems = [
    {
        id: 'checkbox_usage',
        sourceNo: 0,
        title: 'Usage',
        description: 'For basic checkbox, add background color, padding, and border radius only.',
        component: {
            dark: <button className='bg-blue-300 text-black p-2 rounded-md'>Checkbox</button>,
            light: <button className='bg-blue-500 text-white p-2 rounded-md'>Checkbox</button>
        },
        clipboard: 'Button',
        source: `<div>\n\t<button className='bg-blue-400 p-2 rounded-md'>\n\t\taCheckbox\n\t</button>\n</div>`
    },
    {
        id: 'bheckbox_sizes',
        sourceNo: 1,
        title: 'Checkbox Sizes',
        description: 'For basic checkbox, add background color, padding, and border radius only.',
        component: {
            dark: <button className='bg-blue-300 text-black p-2 rounded-md'>Checkbox</button>,
            light: <button className='bg-blue-500 text-white p-2 rounded-md'>Checkbox</button>
        },
        clipboard: 'Button',
        source: `<div>\n\t<button className='bg-blue-400 p-2 rounded-md'>\n\t\tCheckbox\n\t</button>\n</div>`
    },
];

export default CheckboxItems