import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  align-items: center;
`;

export const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  background: ${({ theme }) => theme.toggleBackground};
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${({ theme }) => theme.toggleBackground};
    &:before {
      transform: translate(14px, -50%);
    }
  }
`;
