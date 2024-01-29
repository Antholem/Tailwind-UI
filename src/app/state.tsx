import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

type DarkModeStore = {
    darkMode: boolean;
    setDarkMode: () => void;
};

const darkModeAtom = atomWithStorage<DarkModeStore>('darkMode', {
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
