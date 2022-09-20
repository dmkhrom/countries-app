import { gql } from '@apollo/client';

export const CONTINENTS_QUERY = gql`
  query ContinentsQuery {
    continents {
      name
      code
      countries {
        name
      }
    }
  }
`;

export const COUNTRIES_QUERY = gql`
  query Counties {
    countries {
      name
      code
      currency
    }
  }
`;
