import React, { ChangeEvent } from 'react';
import { Label, Switch, Input } from './styles';
import {
  useThemeColorContext,
  DARK_MODE_KEY,
  LIGHT_MODE_KEY,
} from '../../context/ThemeColorMode';
import { MODES_NAMES } from '../../constants';

function Switcher() {
  const { colorMode, changeColorMode } = useThemeColorContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeColorMode(e.target.checked ? LIGHT_MODE_KEY : DARK_MODE_KEY);
  };

  return (
    <Label>
      <span>
        {
          MODES_NAMES[
            colorMode === LIGHT_MODE_KEY ? DARK_MODE_KEY : LIGHT_MODE_KEY
          ]
        }{' '}
        theme
      </span>
      <Input
        checked={colorMode === LIGHT_MODE_KEY}
        type="checkbox"
        onChange={handleChange}
      />
      <Switch />
    </Label>
  );
}

export default Switcher;
