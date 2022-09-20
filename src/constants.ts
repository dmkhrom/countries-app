export const DEFAULT_SELECT_VALUE = {
  code: '',
  name: 'Select country',
  currency: '',
  countries: [],
};

export const HINTS = {
  error: {
    show: true,
    type: 'error',
    text: 'Currency does not match the country selected. Please correct',
  },
  confirmed: {
    show: true,
    type: 'confirmed',
    text: 'Right currency code',
  },
};

export const CURRENCY_CODE_LENGTH = 3;

export const STORAGE_KEYS = {
  selectedCountry: 'selectedCountry',
  currency: 'currency',
  selectedContinent: 'selectedContinent',
};

export const MODES_NAMES = {
  darkMode: 'Dark',
  lightMode: 'Light',
};
