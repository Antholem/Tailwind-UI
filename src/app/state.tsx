// state.ts
import { atom, useAtom } from 'jotai';

export const darkModeAtom = atom<boolean>(true);

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return { darkMode, toggleDarkMode };
};
