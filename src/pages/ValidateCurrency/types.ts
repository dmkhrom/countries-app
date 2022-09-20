import React from 'react';

export interface Country {
  code: string;
  name: string;
  currency: string;
}

export interface CountriesData {
  countries: Country[];
}

export type SelectProps = {
  selectedCountry: Country | null;
  handleChangeCountry: (
    selectedCountry: React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  countriesData: Array<Country>;
};

export type InputProps = {
  currency: string;
  handleChangeCurrency: (currency: React.ChangeEvent<HTMLInputElement>) => void;
};

export type HintProps = {
  show: boolean;
  type: string;
  text?: string;
};
