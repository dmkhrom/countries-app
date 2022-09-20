import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import Container from './styles';
import { Router } from '../router';
import GlobalStyle from '../globalStyles';
import { useThemeColorContext } from '../context/ThemeColorMode';
import client from '../graphql/client';
import Header from '../components/Header';

function App() {
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
}

export default App;
