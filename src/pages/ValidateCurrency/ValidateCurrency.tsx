import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { COUNTRIES_QUERY } from '../../graphql/queries';
import { ErrorHint, Wrapper } from './styles';
import { SelectComponent } from './Select/Select';
import { CountriesData, Country, HintProps } from './types';
import { InputComponent } from './Input/Input';
import { CURRENCY_CODE_LENGTH, DEFAULT_SELECT_VALUE, HINTS } from './constants';

export const ValidateCurrency = () => {
  const getSelectInitialValue = () => {
    const storageValue = localStorage.getItem('selectedCountry');

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return null;
    }
  };

  const getInputInitialValue = () => {
    const storageValue = localStorage.getItem('currency');

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return '';
    }
  };

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    getSelectInitialValue(),
  );
  const [countriesData, setCountriesData] = useState<Array<Country>>([]);
  const [currency, setCurrency] = useState<string>(getInputInitialValue());
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
    if (currency.length) {
      setCurrency('');
    }
    if (showHint) {
      setShowHint(null);
    }
    const country = countriesData.find((item) => item.code === e.target.value);
    localStorage.setItem('selectedCountry', JSON.stringify(country || null));
    setSelectedCountry(country || null);
  };

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showHint) {
      setShowHint(null);
    }
    if (e.target.value.length > CURRENCY_CODE_LENGTH) {
      return;
    }
    if (e.target.value.length === CURRENCY_CODE_LENGTH) {
      validateCurrencyCode(e.target.value);
      localStorage.setItem('currency', JSON.stringify(e.target.value));
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
};
