/* eslint-disable react/jsx-boolean-value */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import GlobalStyle from './styles/GlobalStyles';
import Theme from './styles/theme';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import DetailPage from './Pages/DetailPage';
import WritingPage from './Pages/WritingPage';
import LoadingPage from './Pages/LoadingPage';
import MainPage from './Pages/MainPage';
import SignUpPage from './Pages/SignUpPage';
import EditPage from './Pages/EditingPage';
import NotFound from './Pages/NotFound';

function App() {
  axios.defaults.baseURL = 'http://13.125.85.216:8080';
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <AllWrap>
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/edit/:boardId" element={<EditPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            {/* 화면 보려고 로딩페이지에 임시로 라우터 넣었습니다 */}
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AllWrap>
        <ToastContainerStyled
          limit={1}
          position="bottom-center"
          closeButton={false}
          hideProgressBar
          transition={Slide}
          autoClose={4000}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const AllWrap = styled.div`
  position: relative;
  min-height: 100%;
`;
const ToastContainerStyled = styled(ToastContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  font-size: 25px;

  .Toastify__toast {
    width: 392px;
    height: 100px;
    border-radius: 20px;
    background-color: rgba(1, 134, 209, 0.6);
    opacity: 0.9;
    color: black;
  }
`;

export default App;
