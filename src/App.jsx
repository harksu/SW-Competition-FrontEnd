import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
