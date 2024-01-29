const List = [
    {
        id: 1,
        title: 'Usage',
        description: 'For basic button, add background color, padding, and border radius only.',
        component: {
            dark: <button className='bg-blue-300 text-black p-2 rounded-md'>Button</button>,
            light: <button className='bg-blue-500 text-white p-2 rounded-md'>Button</button>
        },
        clipboard: 'Button',
        source: `<div>\n\t<button className='bg-blue-400 p-2 rounded-md'>\n\t\tButton\n\t</button>\n</div>`
    }
];

export default List