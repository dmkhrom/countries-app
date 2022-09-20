import React from 'react';
import Select from './styles';
import LabelComponent from '../Label';

interface Option {
  code: string;
  name: string;
}

export interface SelectProps<T extends Option> {
  label: string;
  onChange: (selectedItem: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<T>;
  placeholder: string;
  value: string | undefined;
}

function SelectComponent<T extends Option>({
  label,
  options,
  onChange,
  placeholder,
  value = '',
}: SelectProps<T>) {
  return (
    <LabelComponent label={label}>
      <Select onChange={onChange} value={value}>
        <option disabled value="">
          {placeholder}
        </option>
        {options.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </Select>
    </LabelComponent>
  );
}
export default SelectComponent;
