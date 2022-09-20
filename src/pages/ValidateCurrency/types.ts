export interface Country {
  code: string;
  name: string;
  currency: string;
}

export interface CountriesData {
  countries: Country[];
}

export enum HintType {
  confirmed = 'confirmed',
  error = 'error',
}

export interface HintProps {
  type: HintType;
  text?: string;
}
