import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { CONTINENTS_QUERY } from '../../graphql/queries';
import { CountriesList, CountryTile, Wrapper } from './styles';
import { Continent, ContinentsData, Country } from './types';
import persistDataServices from '../../services';
import { StorageKey } from '../../types';
import SelectComponent from '../../components/Select/Select';

function Continents() {
  const { setToStorage, getStorageValue } = persistDataServices();

  const [selectedContinent, setSelectedContinent] = useState<Continent | null>(
    getStorageValue<Continent | null>('selectedContinent', null),
  );
  const [continentsData, setContinentsData] = useState<Array<Continent>>([]);

  const { data } = useQuery<ContinentsData>(CONTINENTS_QUERY);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const continent =
      continentsData.find(({ code }) => code === e.target.value) || null;
    setToStorage<Continent | null>(StorageKey.selectedContinent, continent);
    setSelectedContinent(continent);
  };

  useEffect(() => {
    if (data) {
      setContinentsData(data.continents);
    }
  }, [data]);

  return (
    <Wrapper>
      <SelectComponent
        optionsData={continentsData}
        handleChange={handleChange}
        selectedItem={selectedContinent}
        placeholder="Select continent"
      />
      <CountriesList>
        {selectedContinent?.countries.map(({ name, code }: Country) => (
          <CountryTile key={code}>{name}</CountryTile>
        ))}
      </CountriesList>
    </Wrapper>
  );
}

export default Continents;
