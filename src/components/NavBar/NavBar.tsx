import React from 'react';
import { NAVIGATION } from '../../router';
import { CustomLink, NavigationWrapper } from './styles';

export const NavBar = () => (
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
