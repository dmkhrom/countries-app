import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  gap: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;

export const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  background: ${(props) => props.theme.toggleBackground};
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
    background: ${(props) => props.theme.toggleBackground};
    &:before {
      transform: translate(14px, -50%);
    }
  }
`;
