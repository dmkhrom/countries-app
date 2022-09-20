export interface Country {
  code: string;
  name: string;
}

export interface Continent {
  code: string;
  name: string;
  countries: Array<Country>;
}

export interface ContinentsData {
  continents: Continent[];
}
