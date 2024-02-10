import Components from '@/app/(views)/(forms)/button/components';
import Sources from '@/app/(views)/(forms)/button/sources';

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
        language: 'javascript',
        component: {
            dark: Components.ButtonDark(),
            light: Components.ButtonLight()
        },
        clipboard: 'Button',
        source: {
            dark: Sources.ButtonSourceDark(),
            light: Sources.ButtonSourceLight()
        },
    },
    {
        id: 'button_sizes',
        sourceNo: 1,
        title: 'Button Sizes',
        description: 'For basic button, add background color, padding, and border radius only.',
        language: 'javascript',
        component: {
            dark: Components.ButtonDark(),
            light: Components.ButtonLight()
        },
        clipboard: 'Button',
        source: {
            dark: Sources.ButtonSourceDark(),
            light: Sources.ButtonSourceLight()
        },
    },
];

export default { ButtonHeader, ButtonComponents }