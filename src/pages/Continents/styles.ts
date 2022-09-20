import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const CountriesList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 100px;
`;

export const CountryTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  color: #2d2d2d;
  background-color: ${({ theme }) => theme.elementsBackground};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  font-size: 16px;
`;
