import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DefaultTheme } from 'styled-components';
import persistDataServices from '../services';
import { darkTheme, lightTheme } from '../styles/Themes';
import { StorageKey, ThemeColorMode } from '../types';

interface ProviderProps {
  children: ReactNode;
}

interface ThemeColorTypes {
  changeColorMode: (colorMode: ThemeColorMode) => void;
  colorMode: ThemeColorMode;
  theme: DefaultTheme;
}

const INITIAL_CONTEXT_VALUE = {
  changeColorMode: () => null,
  colorMode: ThemeColorMode.light,
  theme: lightTheme,
};

const ThemeColorContext = createContext<ThemeColorTypes>(INITIAL_CONTEXT_VALUE);

function ThemeModeProvider({ children }: ProviderProps) {
  const { setToStorage, getStorageValue } = persistDataServices();

  const [colorMode, setColorMode] = useState<ThemeColorMode>(
    getStorageValue<ThemeColorMode>(StorageKey.theme, ThemeColorMode.light),
  );
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    setTheme(colorMode === ThemeColorMode.light ? lightTheme : darkTheme);
  }, [colorMode]);

  const changeColorMode = useCallback(
    (mode: ThemeColorMode) => {
      setToStorage<ThemeColorMode>(StorageKey.theme, mode);
      setColorMode(mode);
    },
    [setColorMode, setToStorage],
  );

  const themeColorProviderValue = useMemo(
    () => ({ theme, colorMode, changeColorMode }),
    [theme, colorMode, changeColorMode],
  );

  return (
    <ThemeColorContext.Provider value={themeColorProviderValue}>
      {children}
    </ThemeColorContext.Provider>
  );
}

const useThemeColorContext = () => useContext(ThemeColorContext);

export { useThemeColorContext, ThemeModeProvider };
