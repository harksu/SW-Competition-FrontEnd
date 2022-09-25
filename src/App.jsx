import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';
import Footer from './components/Footer';
import LoginPage from './Pages/LoginPage';
import DetailPage from './Pages/DetailPage';
import LoadingPage from './Pages/LoadingPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AllWrap>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/detail" element={<DetailPage />} />
          {/* 화면 보려고 로딩페이지에 임시로 라우터 넣었습니다 */}
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
        <Footer />
      </AllWrap>
    </ThemeProvider>
  );
}

const AllWrap = styled.div`
  position: relative;
  min-height: 100%;
`;

export default App;
