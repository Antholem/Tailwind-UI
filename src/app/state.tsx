// state.ts
import create from 'zustand';

interface GlobalState {
    darkMode: boolean;
    setDarkMode: () => void;
}

const useGlobalState = create<GlobalState>((set) => ({
    darkMode: true,
    setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useGlobalState;
