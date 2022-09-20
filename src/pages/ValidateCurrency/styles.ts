import styled from 'styled-components';
import { HintType } from './types';

interface HintProps {
  type: HintType;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  max-width: 400px;
`;

export const Hint = styled.span<HintProps>`
  color: ${({ type }) => (type === HintType.error ? 'red' : 'green')};
`;
