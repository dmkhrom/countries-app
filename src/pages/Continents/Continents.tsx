import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { CONTINENTS_QUERY } from '../../graphql/queries';
import { CountriesList, CountryTile, Wrapper } from './styles';
import { SelectComponent } from './Select/Select';
import { Continent, ContinentsData, Country } from './types';

const DEFAULT_VALUE = {
  code: '',
  name: 'Select continent',
  countries: [],
};

export const Continents = () => {
  const getInitialValue = () => {
    const storageValue = localStorage.getItem('selectedContinent');

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return null;
    }
  };
  const [selectedContinent, setSelectedContinent] = useState<Continent | null>(
    getInitialValue(),
  );
  const [continentsData, setContinentsData] = useState<Array<Continent>>([]);

  const { data } = useQuery<ContinentsData>(CONTINENTS_QUERY);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const continent = continentsData.find(
      (item) => item.code === e.target.value,
    );
    localStorage.setItem(
      'selectedContinent',
      JSON.stringify(continent || null),
    );
    setSelectedContinent(continent || null);
  };

  useEffect(() => {
    if (data) {
      setContinentsData([DEFAULT_VALUE, ...data.continents]);
    }
  }, [data]);

  return (
    <Wrapper>
      <SelectComponent
        continentsData={continentsData}
        handleChange={handleChange}
        selectedContinent={selectedContinent}
      />
      <CountriesList>
        {selectedContinent?.countries.map((country: Country) => (
          <CountryTile>{country.name}</CountryTile>
        ))}
      </CountriesList>
    </Wrapper>
  );
};
