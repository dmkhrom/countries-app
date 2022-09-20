import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { COUNTRIES_QUERY } from '../../graphql/queries';
import { Hint, Wrapper } from './styles';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { CountriesData, Country, HintType } from './types';
import persistDataServices from '../../services';
import { StorageKey } from '../../types';

export const hintLabels = {
  [HintType.error]:
    'Currency does not match the country selected. Please correct',
  [HintType.confirmed]: 'Right currency code',
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
  const [hint, setHint] = useState<HintType | null>(null);

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
      setHint(HintType.error);
    } else {
      setHint(HintType.confirmed);
    }
  };

  const handleChangeCountry = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    if (hint) {
      setHint(null);
    }
    const country =
      countriesData.find(({ code }) => code === target.value) || null;

    setToStorage<Country | null>(StorageKey.selectedCountry, country);
    setSelectedCountry(country);
  };

  const handleChangeCurrency = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.value.length > CURRENCY_CODE_LENGTH) {
      return;
    }
    if (hint) {
      setHint(null);
    }
    if (target.value.length === CURRENCY_CODE_LENGTH) {
      validateCurrencyCode(target.value);
      setToStorage<string>(StorageKey.currency, target.value);
    }
    setCurrency(target.value);
  };

  return (
    <Wrapper>
      <Select<Country>
        options={countriesData}
        onChange={handleChangeCountry}
        value={selectedCountry?.code}
        label="Select country:"
        placeholder="Select country"
      />
      <Input
        label="Enter currency code(3 symbols):"
        placeholder="Input currency code"
        value={currency}
        onChange={handleChangeCurrency}
      />
      {hint && <Hint type={hint}>{hintLabels[hint]}</Hint>}
    </Wrapper>
  );
}

export default CurrencyValidation;
