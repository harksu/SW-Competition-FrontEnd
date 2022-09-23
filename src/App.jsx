import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';

import Header from './components/Header';
import Footer from './components/Footer';

import LoginPage from './Pages/LoginPage';
import DetailPage from './Pages/DetailPage';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
