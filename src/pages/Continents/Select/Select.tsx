import React from 'react';
import { Wrapper, Select } from './styles';
import { Continent, SelectProps } from '../types';

export const SelectComponent: React.FC<SelectProps> = ({
  continentsData,
  handleChange,
  selectedContinent,
}) => (
  <Wrapper>
    <label htmlFor="select-data">Select continent:</label>
    <Select
      id="select-data"
      placeholder={'SELECT CONTINENT'}
      value={selectedContinent?.code}
      onChange={handleChange}
    >
      {continentsData.map((continent: Continent) => (
        <option key={continent.code} value={continent.code}>
          {continent.name}
        </option>
      ))}
    </Select>
  </Wrapper>
);
