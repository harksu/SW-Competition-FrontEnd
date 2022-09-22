import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
