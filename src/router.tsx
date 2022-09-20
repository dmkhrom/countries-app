import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Continents } from './pages/Continents/Continents';
import { ValidateCurrency } from './pages/ValidateCurrency/ValidateCurrency';

export const NAVIGATION = [
  {
    element: <Navigate replace to="/continents" />,
    path: '/',
  },
  {
    element: <Continents />,
    name: 'Continents',
    path: '/continents',
  },
  {
    element: <ValidateCurrency />,
    name: 'Check currency',
    path: '/validation',
  },
];

export const Router = () => useRoutes(NAVIGATION);
