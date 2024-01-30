import { atom, useAtom } from 'jotai';

type DarkModeStore = {
    darkMode: boolean;
    setDarkMode: () => void;
};

const darkModeAtom = atom<DarkModeStore>({
    darkMode: true,
    setDarkMode: () => { },
});

export const useDarkMode = () => {
    const [state, setState] = useAtom(darkModeAtom);

    const setDarkMode = () => {
        setState((prev) => ({
            ...prev,
            darkMode: !prev.darkMode,
        }));
    };

    return { ...state, setDarkMode };
};