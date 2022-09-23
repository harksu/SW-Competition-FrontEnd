import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import DetailPage from './Pages/DetailPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
