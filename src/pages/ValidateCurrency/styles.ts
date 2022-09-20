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

export const ErrorHint = styled.span<HintProps>`
  color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
`;
