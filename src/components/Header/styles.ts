import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  box-sizing: border-box;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;
