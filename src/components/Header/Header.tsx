import React from 'react';
import { Wrapper } from './styles';
import { Switcher } from '../Switcher/Switcher';
import { NavBar } from '../NavBar/NavBar';

export const Header = () => {
  return (
    <Wrapper>
      <NavBar />
      <Switcher />
    </Wrapper>
  );
};
