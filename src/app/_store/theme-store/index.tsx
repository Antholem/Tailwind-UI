import { create } from 'zustand';

type DarkModeStore = {
    darkMode: boolean;
    setDarkMode: () => void;
};

const useDarkModeStore = create<DarkModeStore>((set) => ({
    darkMode: true,
    setDarkMode: () => set((state) => ({
        darkMode: !state.darkMode,
    })),
}));

export default useDarkModeStore;
