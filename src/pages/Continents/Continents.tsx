import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { CONTINENTS_QUERY } from '../../graphql/queries';
import { CountriesList, CountryTile, Wrapper } from './styles';
import SelectComponent from './Select/Select';
import { Continent, ContinentsData, Country } from './types';
import persistDataServices from '../../services';
import { STORAGE_KEYS } from '../../constants';

const DEFAULT_VALUE = {
  code: '',
  name: 'Select continent',
  countries: [],
};

function Continents() {
  const { setToStorage, getStorageValue } = persistDataServices();

  const [selectedContinent, setSelectedContinent] = useState<Continent | null>(
    getStorageValue<Continent | null>('selectedContinent', null),
  );
  const [continentsData, setContinentsData] = useState<Array<Continent>>([]);

  const { data } = useQuery<ContinentsData>(CONTINENTS_QUERY);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const continent =
      continentsData.find((item) => item.code === e.target.value) || null;
    setToStorage<Continent | null>(STORAGE_KEYS.selectedContinent, continent);
    setSelectedContinent(continent);
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
          <CountryTile key={country.name}>{country.name}</CountryTile>
        ))}
      </CountriesList>
    </Wrapper>
  );
}

export default Continents;
