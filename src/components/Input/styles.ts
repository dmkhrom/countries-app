import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.elementsBackground};
`;

export default Input;
