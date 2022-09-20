import React from 'react';
import Wrapper from './styles';
import NavBar from '../NavBar';
import Switcher from '../Switcher';

function Header() {
  return (
    <Wrapper>
      <NavBar />
      <Switcher />
    </Wrapper>
  );
}

export default Header;
