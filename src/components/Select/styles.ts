import styled from 'styled-components';

const Select = styled.select`
  width: 200px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.elementsBackground};
`;

export default Select;
