import styled from 'styled-components';

type HintProps = {
  show: boolean | null;
  type: string | null;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  max-width: 400px;
`;

export const ErrorHint = styled.span<HintProps>`
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
`;
