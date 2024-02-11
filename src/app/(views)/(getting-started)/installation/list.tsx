import Components from '@/app/(views)/(getting-started)/installation/components';
import Sources from '@/app/(views)/(getting-started)/installation/sources';

const InstallationHeader = {
    title: 'Installation',
    describe: 'Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.',
};

const InstallationComponents = [
    {
        id: 'installation_tailwind_cli',
        sourceNo: 0,
        title: 'Tailwind CLI',
        description: 'The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.',
        language: 'powershell',
        clipboard: 'Terminal',
        source: {
            dark: Sources.InstallationCliSourceDark(),
            light: Sources.InstallationCliSourceDark()
        },
    },
];

export default { InstallationHeader, InstallationComponents }