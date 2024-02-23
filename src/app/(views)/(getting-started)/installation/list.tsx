import Components from '@/app/(views)/(getting-started)/installation/components';
import Sources from '@/app/(views)/(getting-started)/installation/sources';

const InstallationHeader = {
    title: 'Installation',
    describe: 'Step by step installation and setting up Tailwind CSS in a JavaScript Project.',
};

const InstallationComponents = [
    {
        id: 'installation_nextjs',
        bulletNum: '1',
        sourceNo: 0,
        title: 'NextJs Installation',
        subtitle: 'Create your project',
        description: 'Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App.',
        language: 'powershell',
        clipboard: 'Terminal',
        source: {
            dark: Sources.InstallationNextJs(),
            light: Sources.InstallationNextJs()
        },
    },
    {
        id: 'installation_nextjs_tailwind',
        bulletNum: '2',
        sourceNo: 1,
        title: null,
        subtitle: 'Install Tailwind CSS',
        description: 'Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.',
        language: 'powershell',
        clipboard: 'Terminal',
        source: {
            dark: Sources.InstallationNextJsTailwind(),
            light: Sources.InstallationNextJsTailwind()
        },
    },
    {
        id: 'installation_nextjs_paths',
        bulletNum: '3',
        sourceNo: 2,
        title: null,
        subtitle: 'Configure your template paths',
        description: 'Add the paths to all of your template files in your tailwind.config.js file.',
        language: 'javascript',
        clipboard: 'tailwind.config.js',
        source: {
            dark: Sources.InstallationNextJsPath(),
            light: Sources.InstallationNextJsPath()
        },
    },
    {
        id: 'installation_build_process',
        bulletNum: '4',
        sourceNo: 3,
        title: null,
        subtitle: 'Add the Tailwind directives to your CSS',
        description: 'Add the @tailwind directives for each of Tailwind’s layers to your globals.css file.',
        language: 'css',
        clipboard: 'globals.css',
        source: {
            dark: Sources.InstallationNextJsCss(),
            light: Sources.InstallationNextJsCss()
        },
    },
    {
        id: 'installation_nextjs_run',
        bulletNum: '5',
        sourceNo: 4,
        title: null,
        subtitle: 'Start your build process',
        description: 'Run your build process with npm run dev.',
        language: 'powershell',
        clipboard: 'Terminal',
        source: {
            dark: Sources.InstallationNextJsRun(),
            light: Sources.InstallationNextJsRun()
        },
    },
    {
        id: 'installation_nextjs_start',
        bulletNum: '6',
        sourceNo: 5,
        title: null,
        subtitle: 'Start using Tailwind in your project',
        description: 'Start using Tailwind’s utility classes to style your content.',
        language: 'typescript',
        clipboard: 'index.tsx',
        source: {
            dark: Sources.InstallationNextJsStart(),
            light: Sources.InstallationNextJsStart()
        },
    },
];

export default { InstallationHeader, InstallationComponents }