import React, { ChangeEvent } from 'react';
import { Input, Label, Switch } from './styles';
import { useThemeColorContext } from '../../context/ThemeColorMode';
import { ThemeColorMode } from '../../types';

const colorThemeLabels = {
  [ThemeColorMode.dark]: 'Dark',
  [ThemeColorMode.light]: 'Light',
};

function Switcher() {
  const { colorMode, changeColorMode } = useThemeColorContext();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    changeColorMode(
      target.checked ? ThemeColorMode.light : ThemeColorMode.dark,
    );
  };

  return (
    <Label>
      <span>
        {colorThemeLabels[colorMode]}
        &nbsp; theme
      </span>
      <Input
        checked={colorMode === ThemeColorMode.light}
        type="checkbox"
        onChange={handleChange}
      />
      <Switch />
    </Label>
  );
}

export default Switcher;
