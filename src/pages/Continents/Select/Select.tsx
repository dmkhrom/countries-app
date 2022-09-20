import React from 'react';
import Select from './styles';
import { Continent, SelectProps } from '../types';
import LabelComponent from '../../../components/Label/Label';

function SelectComponent({
  continentsData,
  handleChange,
  selectedContinent,
}: SelectProps) {
  return (
    <LabelComponent label="Select continent:">
      <Select value={selectedContinent?.code || ''} onChange={handleChange}>
        {continentsData.map((continent: Continent, index) => (
          <option disabled={!index} key={continent.code} value={continent.code}>
            {continent.name}
          </option>
        ))}
      </Select>
    </LabelComponent>
  );
}

export default SelectComponent;
