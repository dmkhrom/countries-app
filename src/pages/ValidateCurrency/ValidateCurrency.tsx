import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { COUNTRIES_QUERY } from '../../graphql/queries';
import { ErrorHint, Wrapper } from './styles';
import SelectComponent from '../../components/Select';
import { CountriesData, Country, HintProps } from './types';
import InputComponent from '../../components/Input';
import persistDataServices from '../../services';
import { StorageKey } from '../../types';

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

function CurrencyValidation() {
  const { setToStorage, getStorageValue } = persistDataServices();

  const [countriesData, setCountriesData] = useState<Array<Country>>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    getStorageValue<Country | null>(StorageKey.selectedCountry, null),
  );
  const [currency, setCurrency] = useState<string>(
    getStorageValue<string>(StorageKey.currency, ''),
  );
  const [showHint, setShowHint] = useState<HintProps | null>(null);

  const { data } = useQuery<CountriesData>(COUNTRIES_QUERY);

  useEffect(() => {
    if (data) {
      setCountriesData(data.countries);
    }
  }, [data]);

  const validateCurrencyCode = (value: string) => {
    if (
      selectedCountry &&
      value.toLowerCase() !== selectedCountry.currency.toLowerCase()
    ) {
      setShowHint(HINTS.error);
    } else {
      setShowHint(HINTS.confirmed);
    }
  };

  const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (showHint) {
      setShowHint(null);
    }
    const country =
      countriesData.find(({ code }) => code === e.target.value) || null;

    setToStorage<Country | null>(StorageKey.selectedCountry, country);
    setSelectedCountry(country);
  };

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > CURRENCY_CODE_LENGTH) {
      return;
    }
    if (showHint) {
      setShowHint(null);
    }
    if (e.target.value.length === CURRENCY_CODE_LENGTH) {
      validateCurrencyCode(e.target.value);
      setToStorage<string>(StorageKey.currency, e.target.value);
    }
    setCurrency(e.target.value);
  };

  return (
    <Wrapper>
      <SelectComponent
        optionsData={countriesData}
        handleChange={handleChangeCountry}
        selectedItem={selectedCountry}
        placeholder="Select country"
      />
      <InputComponent
        currency={currency}
        handleChangeCurrency={handleChangeCurrency}
      />
      <ErrorHint show={showHint?.show || null} type={showHint?.type || null}>
        {showHint?.text}
      </ErrorHint>
    </Wrapper>
  );
}

export default CurrencyValidation;
