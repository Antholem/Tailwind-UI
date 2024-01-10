import useDarkModeStore from "@/app/_store/theme-store";

const GetTheme = () => {
    const { darkMode } = useDarkModeStore();

    const textPrimary = darkMode ? 'text-white' : 'text-black';
    const textSecondary = darkMode ? 'text-blue-300' : 'text-blue-600';

    return {
        textSecondary,
        textPrimary
    };
}

export default GetTheme;