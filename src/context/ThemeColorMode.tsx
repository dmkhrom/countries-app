import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/Themes';

interface ProviderProps {
  children: ReactElement;
}

export const DARK_MODE_KEY: ThemeModeList = 'darkMode';
export const LIGHT_MODE_KEY: ThemeModeList = 'lightMode';

export type ThemeModeList = 'darkMode' | 'lightMode';

export type SwitcherTypes = {
  changeColorMode: (colorMode: ThemeModeList) => void;
  colorMode?: ThemeModeList;
  theme: DefaultTheme;
};

const INITIAL_CONTEXT_VALUE = {
  changeColorMode: () => {},
  colorMode: LIGHT_MODE_KEY,
  theme: lightTheme,
};

const ThemeColorContext = createContext<SwitcherTypes>(INITIAL_CONTEXT_VALUE);

const ThemeModeProvider = ({ children }: ProviderProps) => {
  const getInitialValue = () => {
    const storageValue = localStorage.getItem('theme');

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return LIGHT_MODE_KEY;
    }
  };

  const [colorMode, setColorMode] = useState<ThemeModeList>(getInitialValue());
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    setTheme(colorMode === LIGHT_MODE_KEY ? lightTheme : darkTheme);
  }, [colorMode]);

  const changeColorMode = (colorMode: ThemeModeList) => {
    localStorage.setItem('theme', JSON.stringify(colorMode));
    setColorMode(colorMode);
  };

  return (
    <div>
      <ThemeColorContext.Provider value={{ theme, colorMode, changeColorMode }}>
        {children}
      </ThemeColorContext.Provider>
    </div>
  );
};

const useThemeColorContext = () => useContext(ThemeColorContext);

export { useThemeColorContext, ThemeModeProvider };
