import React from 'react';

export interface Continent {
  code: string;
  name: string;
  countries: Array<Country>;
}

export interface ContinentsData {
  continents: Continent[];
}

export interface Country {
  code: string;
  name: string;
}

export type SelectProps = {
  selectedContinent: Continent | null;
  handleChange: (val: React.ChangeEvent<HTMLSelectElement>) => void;
  continentsData: Array<Continent>;
};
