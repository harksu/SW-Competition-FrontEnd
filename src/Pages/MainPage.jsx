import React from 'react';
import styled from 'styled-components';

function MainPage() {
  return (
    <MainBg>
      <MainTitle>명지 의견 나눔함</MainTitle>
      <MainContainer>
        <ListContainer />
        <WriteButton>작성하기</WriteButton>
        <ListPages />
      </MainContainer>
    </MainBg>
  );
}

const MainBg = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainTitle = styled.p`
  font-size: 40px;
  font-weight: 500;
  margin: 55px 0 10px 53px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72%;
  background-color: yellow;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 80%;
  border: 0.5px solid #000;
`;

const ListPages = styled.div`
  width: 350px;
  height: 40px;
  border: 0.5px solid #000;
  border-radius: 5px;
`;

const WriteButton = styled.button`
  width: 152px;
  height: 48px;
  margin-left: 80%;
  border-radius: 5px;
  cursor: pointer;
`;

export default MainPage;
