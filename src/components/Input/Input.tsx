import React from 'react';
import Input from './styles';
import LabelComponent from '../Label/Label';

interface Props {
  label: string;
  onChange: (string: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

function InputComponent({ label, onChange, placeholder, value }: Props) {
  return (
    <LabelComponent label={label}>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </LabelComponent>
  );
}

export default InputComponent;
