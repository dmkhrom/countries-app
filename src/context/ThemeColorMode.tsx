import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DefaultTheme } from 'styled-components';
import persistDataServices from '../services';
import { darkTheme, lightTheme } from '../styles/Themes';

interface ProviderProps {
  children: ReactElement;
}

export type ThemeModeList = 'darkMode' | 'lightMode';

export const DARK_MODE_KEY: ThemeModeList = 'darkMode';
export const LIGHT_MODE_KEY: ThemeModeList = 'lightMode';

export type SwitcherTypes = {
  changeColorMode: (colorMode: ThemeModeList) => void;
  colorMode?: ThemeModeList;
  theme: DefaultTheme;
};

const INITIAL_CONTEXT_VALUE = {
  changeColorMode: () => null,
  colorMode: LIGHT_MODE_KEY,
  theme: lightTheme,
};

const ThemeColorContext = createContext<SwitcherTypes>(INITIAL_CONTEXT_VALUE);

function ThemeModeProvider({ children }: ProviderProps) {
  const { setToStorage, getStorageValue } = persistDataServices();

  const [colorMode, setColorMode] = useState<ThemeModeList>(
    getStorageValue<ThemeModeList>('theme', LIGHT_MODE_KEY),
  );
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    setTheme(colorMode === LIGHT_MODE_KEY ? lightTheme : darkTheme);
  }, [colorMode]);

  const changeColorMode = useCallback(
    (mode: ThemeModeList) => {
      setToStorage<ThemeModeList>('theme', mode);
      setColorMode(mode);
    },
    [setColorMode, setToStorage],
  );

  const themeColorProviderValue = useMemo(
    () => ({ theme, colorMode, changeColorMode }),
    [theme, colorMode, changeColorMode],
  );

  return (
    <div>
      <ThemeColorContext.Provider value={themeColorProviderValue}>
        {children}
      </ThemeColorContext.Provider>
    </div>
  );
}

const useThemeColorContext = () => useContext(ThemeColorContext);

export { useThemeColorContext, ThemeModeProvider };
