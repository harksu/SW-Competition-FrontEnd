import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
