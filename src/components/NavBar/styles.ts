import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;
  height: 50px;
  align-items: center;
`;

export const CustomLink = styled(NavLink)`
  height: 16px;
  text-decoration: none;
  font-weight: 600;
  line-height: 16px;
  color: ${(props) => props.theme.text};
  margin-right: 26px;
  padding-bottom: 10px;
  opacity: 0.6;
  &:hover {
    border-bottom: 1px solid #a9a9a9;
  }

  &.active {
    opacity: 1;
    border-bottom: 1px solid #000;
    cursor: default;
  }
`;
