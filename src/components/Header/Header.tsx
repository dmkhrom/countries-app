import React from 'react';
import Wrapper from './styles';
import Switcher from '../Switcher/Switcher';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <Wrapper>
      <NavBar />
      <Switcher />
    </Wrapper>
  );
}

export default Header;
