import { create } from 'zustand';

type DarkModeStore = {
    darkMode: boolean;
    bgColor: number;
    setDarkMode: () => void;
};

const useDarkModeStore = create<DarkModeStore>((set) => ({
    darkMode: localStorage.getItem('darkMode') === 'true' || false,
    bgColor: parseInt(localStorage.getItem('bgColor') || '500'),
    setDarkMode: () => set((state) => {
        const newDarkMode = !state.darkMode;
        localStorage.setItem('darkMode', newDarkMode.toString());
        localStorage.setItem('bgColor', newDarkMode ? '300' : '500');
        return {
            darkMode: newDarkMode,
            bgColor: newDarkMode ? 300 : 500,
        };
    }),
}));

export default useDarkModeStore;
