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
`;

export const CountryTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #525252;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
`;
