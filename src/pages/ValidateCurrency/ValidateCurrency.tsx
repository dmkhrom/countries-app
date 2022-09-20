import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { COUNTRIES_QUERY } from '../../graphql/queries';
import { ErrorHint, Wrapper } from './styles';
import SelectComponent from './Select/Select';
import { CountriesData, Country, HintProps } from './types';
import {
  CURRENCY_CODE_LENGTH,
  DEFAULT_SELECT_VALUE,
  HINTS,
  STORAGE_KEYS,
} from '../../constants';
import InputComponent from './Input/Input';
import persistDataServices from '../../services';

function CurrencyValidation() {
  const { setToStorage, getStorageValue } = persistDataServices();

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    getStorageValue<Country | null>(STORAGE_KEYS.selectedCountry, null),
  );
  const [countriesData, setCountriesData] = useState<Array<Country>>([]);
  const [currency, setCurrency] = useState<string>(
    getStorageValue<string>(STORAGE_KEYS.currency, ''),
  );
  const [showHint, setShowHint] = useState<HintProps | null>(null);

  const { data } = useQuery<CountriesData>(COUNTRIES_QUERY);

  useEffect(() => {
    if (data) {
      setCountriesData([DEFAULT_SELECT_VALUE, ...data.countries]);
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
      countriesData.find((item) => item.code === e.target.value) || null;

    setToStorage<Country | null>(STORAGE_KEYS.selectedCountry, country);
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
      setToStorage<string>(STORAGE_KEYS.currency, e.target.value);
    }
    setCurrency(e.target.value);
  };

  return (
    <Wrapper>
      <SelectComponent
        countriesData={countriesData}
        handleChangeCountry={handleChangeCountry}
        selectedCountry={selectedCountry}
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
