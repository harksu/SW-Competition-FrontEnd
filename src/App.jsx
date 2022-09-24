import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

      <Header />
      <DetailPage />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
