import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Footer />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
