import React from 'react';
import styled from 'styled-components';

import ContentList from '../components/MainPage/ContentList';

function MainPage() {
  return (
    <MainBg>
      <MainTitle>명지 의견 나눔함</MainTitle>
      <MainContainer>
        <ListContainer>
          <ListHeader>
            <Header1stContent>
              <p>최신순&nbsp;</p>|<p>&nbsp;인기순</p>
            </Header1stContent>
            <Header2ndContent>
              <p>순번</p>
              <p>제목</p>
              <p>작성자</p>
              <p>공감</p>
              <p>답변</p>
            </Header2ndContent>
          </ListHeader>
          <ContentList />
        </ListContainer>
        <WriteButton>작성하기</WriteButton>
        <ListPagesButton />
      </MainContainer>
    </MainBg>
  );
}

const MainBg = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainTitle = styled.p`
  font-size: 35px;
  font-weight: 500;
  margin: 45px 0 15px 53px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75%;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 85%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-rows: 55% 45%;
  width: 100%;
  height: 20%;
`;

const Header1stContent = styled.div`
  display: flex;
  margin: 32px 0 0 36px;

  p {
    cursor: pointer;
  }
`;

// const SelectLineUp = styled.p``;

const Header2ndContent = styled.div`
  display: grid;
  grid-template-columns: 7% 63% 10% 10% 10%;
  border: 1px solid #b5b5b5;
  background-color: #f1f1f1;
  text-align: center;

  p {
    padding-top: 13px;
    font-weight: 500;
    font-size: 20px;
  }
`;
const ListPagesButton = styled.div`
  width: 350px;
  height: 40px;
  border: 0.5px solid #adadad;
  border-radius: 5px;
`;

const WriteButton = styled.button`
  width: 138px;
  height: 43px;
  margin: 1% 0 0 80%;
  border: 0.3px solid #b5b5b5;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
`;

export default MainPage;
