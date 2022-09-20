import React from 'react';
import Select from './styles';
import { Country, SelectProps } from '../types';
import LabelComponent from '../../../components/Label/Label';

function SelectComponent({
  countriesData,
  handleChangeCountry,
  selectedCountry,
}: SelectProps) {
  return (
    <LabelComponent label="Select country:">
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
    </LabelComponent>
  );
}
export default SelectComponent;
