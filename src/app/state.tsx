import { create } from 'zustand';

type DarkModeStore = {
    darkMode: boolean;
    setDarkMode: (isEnabled: boolean) => void;
};

const globalState = create<DarkModeStore>((set) => ({
    darkMode: true,
    setDarkMode: (isEnabled) => set((state) => ({
        darkMode: isEnabled,
    })),
}));

export default globalState;
