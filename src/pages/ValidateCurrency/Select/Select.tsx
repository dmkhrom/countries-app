import React from 'react';
import { Wrapper, Select } from './styles';
import { Country, SelectProps } from '../types';

export const SelectComponent: React.FC<SelectProps> = ({
  countriesData,
  handleChangeCountry,
  selectedCountry,
}) => (
  <Wrapper>
    <label htmlFor="select-data">Select country:</label>
    <Select
      id="select-data"
      onChange={handleChangeCountry}
      value={selectedCountry?.code || ''}
    >
      {countriesData.map((country: Country, index) => (
        <option disabled={!index} key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </Select>
  </Wrapper>
);
