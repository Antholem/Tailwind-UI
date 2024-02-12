import Components from '@/app/(views)/(getting-started)/installation/components';
import Sources from '@/app/(views)/(getting-started)/installation/sources';

const InstallationHeader = {
    title: 'Installation',
    describe: 'Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.',
};

const InstallationComponents = [
    {
        id: 'installation_tailwind_cli',
        bulletNum: '1',
        sourceNo: 0,
        title: 'Tailwind CLI',
        subtitle: 'Install Tailwind CSS',
        description: 'Install tailwindcss via npm, and create your tailwind.config.js file.',
        language: 'powershell',
        clipboard: 'Terminal',
        source: {
            dark: Sources.InstallationCliSourceDark(),
            light: Sources.InstallationCliSourceDark()
        },
    },
    {
        id: 'installation_paths',
        bulletNum: '2',
        sourceNo: 1,
        title: null,
        subtitle: 'Configure your template paths',
        description: 'Add the paths to all of your template files in your tailwind.config.js file.',
        language: 'javascript',
        clipboard: 'tailwind.config.js',
        source: {
            dark: Sources.InstallationPaths(),
            light: Sources.InstallationPaths()
        },
    },
    {
        id: 'installation_directives',
        bulletNum: '3',
        sourceNo: 2,
        title: null,
        subtitle: 'Add the Tailwind directives to your CSS',
        description: 'Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.',
        language: 'css',
        clipboard: 'src/input.css',
        source: {
            dark: Sources.InstallationDirectives(),
            light: Sources.InstallationDirectives()
        },
    },
    {
        id: 'installation_build_process',
        bulletNum: '4',
        sourceNo: 3,
        title: null,
        subtitle: 'Start the Tailwind CLI build process',
        description: 'Run the CLI tool to scan your template files for classes and build your CSS.',
        language: 'powershell',
        clipboard: 'Terminal',
        source: {
            dark: Sources.InstallationBuildProcess(),
            light: Sources.InstallationBuildProcess()
        },
    },
    {
        id: 'installation_html',
        bulletNum: '5',
        sourceNo: 4,
        title: null,
        subtitle: 'Start using Tailwind in your HTML',
        description: 'Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.',
        language: 'html',
        clipboard: 'src/index.html',
        source: {
            dark: Sources.InstallationHtml(),
            light: Sources.InstallationHtml()
        },
    },
];

export default { InstallationHeader, InstallationComponents }