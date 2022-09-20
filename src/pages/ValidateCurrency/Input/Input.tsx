import React from 'react';
import { Wrapper, Input } from './styles';
import { InputProps } from '../types';

export const InputComponent: React.FC<InputProps> = ({
  currency,
  handleChangeCurrency,
}) => (
  <Wrapper>
    <label htmlFor="currency-code">Enter currency code(3 symbols):</label>
    <Input
      id="currency-code"
      placeholder="Input currency code"
      value={currency}
      onChange={handleChangeCurrency}
    />
  </Wrapper>
);
