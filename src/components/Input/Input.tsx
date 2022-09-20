import React from 'react';
import Input from './styles';
import { InputProps } from '../../pages/ValidateCurrency/types';
import LabelComponent from '../Label/Label';

function InputComponent({ currency, handleChangeCurrency }: InputProps) {
  return (
    <LabelComponent label="Enter currency code(3 symbols):">
      <Input
        id="currency-code"
        placeholder="Input currency code"
        value={currency}
        onChange={handleChangeCurrency}
      />
    </LabelComponent>
  );
}

export default InputComponent;
