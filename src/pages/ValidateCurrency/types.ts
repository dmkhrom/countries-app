import React from 'react';

export interface Country {
  code: string;
  name: string;
  currency: string;
}

export interface CountriesData {
  countries: Country[];
}

export interface InputProps {
  currency: string;
  handleChangeCurrency: (currency: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface HintProps {
  show: boolean;
  type: string;
  text?: string;
}
