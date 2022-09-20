import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & label {
    font-size: 12px;
  }
`;

export const Select = styled.select`
  width: 200px;
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.elementsBackground};
`;
