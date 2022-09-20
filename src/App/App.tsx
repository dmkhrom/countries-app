import React from 'react';
import { Container } from './styles';
import { Header } from '../components/Header/Header';
import { Router } from '../router';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../globalStyles';
import { ThemeProvider } from 'styled-components';
import { useThemeColorContext } from '../context/ThemeColorMode';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/client';

const App = () => {
  const { theme } = useThemeColorContext();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Container>
            <Header />
            <Router />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
