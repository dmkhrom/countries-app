import React from 'react';
import { NAVIGATION } from '../../router';
import { CustomLink, NavigationWrapper } from './styles';

function NavBar() {
  return (
    <NavigationWrapper>
      {NAVIGATION.map(
        ({ path, name }) =>
          name && (
            <CustomLink key={path} to={path}>
              {name}
            </CustomLink>
          ),
      )}
    </NavigationWrapper>
  );
}

export default NavBar;
