import React from 'react';
import Select from './styles';
import { Country } from '../../pages/ValidateCurrency/types';
import LabelComponent from '../Label';
import { Continent } from '../../pages/Continents/types';

export interface SelectProps {
  selectedItem: Country | Continent | null;
  handleChange: (selectedItem: React.ChangeEvent<HTMLSelectElement>) => void;
  optionsData: Array<Country | Continent>;
  placeholder: string;
}

function SelectComponent({
  optionsData,
  handleChange,
  placeholder,
  selectedItem,
}: SelectProps) {
  return (
    <LabelComponent label="Select country:">
      <Select
        id="select-data"
        onChange={handleChange}
        value={selectedItem?.code || ''}
      >
        <option disabled key="" value="">
          {placeholder}
        </option>
        {optionsData.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </Select>
    </LabelComponent>
  );
}
export default SelectComponent;
