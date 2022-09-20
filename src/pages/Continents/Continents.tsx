import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { CONTINENTS_QUERY } from '../../graphql/queries';
import { CountriesList, CountryTile, Wrapper } from './styles';
import { Continent, ContinentsData, Country } from './types';
import persistDataServices from '../../services';
import { StorageKey } from '../../types';
import Select from '../../components/Select';

function Continents() {
  const { setToStorage, getStorageValue } = persistDataServices();

  const [selectedContinent, setSelectedContinent] = useState<Continent | null>(
    getStorageValue<Continent | null>('selectedContinent', null),
  );
  const [continentsData, setContinentsData] = useState<Array<Continent>>([]);

  const { data } = useQuery<ContinentsData>(CONTINENTS_QUERY);

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const continent =
      continentsData.find(({ code }) => code === target.value) || null;
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
      <Select<Continent>
        options={continentsData}
        onChange={handleChange}
        value={selectedContinent?.code}
        label="Select continent:"
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
