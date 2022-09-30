import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { useRecoilValue } from 'recoil';
// import { authToken } from '../Atoms/atom';
// import Axios from '../lib/axios';

import ContentList from '../Components/MainPage/ContentList';
import ListDemoData from '../Components/MainPage/ListDemoData';
import { ReactComponent as pageMovingBtn } from '../assests/pageMovingBtn.svg';

function MainPage() {
  // const loginToken = useRecoilValue(authToken);
  // const [posts, setPosts] = useState([]);

  // const postAPI = async () => {
  //   try {
  //     const res = await Axios.get('/api/boards', {
  //       headers: {
  //         Authorization: `Bearer ${loginToken}`,
  //       },
  //     });
  //     setPosts(res.data.result.data.boards);
  //   } catch (err) {
  //     console.log('불러오기 실패!');
  //   }
  // };

  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * 10;
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(ListDemoData.length / 10); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    // postAPI();
  }, []);

  return (
    <MainWrap>
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
          {/* <ContentList posts={posts} /> */}
          <ContentList offset={offset} />
        </ListContainer>
        <WriteButton>작성하기</WriteButton>
        <ListPagesButton>
          <PageMovingBtn />
          <PageBtnContainer>
            {pageNumber.map((pages) => (
              <PageBtn
                key={pages}
                onClick={() => {
                  setCurrentPage(pages);
                }}
              >
                {pages}
              </PageBtn>
            ))}
          </PageBtnContainer>
          <PageMovingBtn rightbtn="true" />
        </ListPagesButton>
      </MainContainer>
    </MainWrap>
  );
}

const MainWrap = styled.div`
  width: 100%;
  height: 1220px;
`;

const MainTitle = styled.p`
  font-size: 50px;
  font-weight: 700;
  margin: 85px 0 37px 53px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1040px;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 850px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-rows: 55% 45%;
  width: 100%;
  height: 172px;
`;

const Header1stContent = styled.div`
  display: flex;
  margin: 56px 0 0 36px;

  p {
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
  }
`;

const Header2ndContent = styled.div`
  display: grid;
  grid-template-columns: 11% 51% 13% 13% 13%;
  border: 1px solid #b5b5b5;
  background-color: #f1f1f1;
  text-align: center;

  p {
    padding: 21px 0;
    font-weight: 500;
    font-size: 25px;
  }
`;

const ListPagesButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 40px;
  border: 1px solid #adadad;
  border-radius: 5px;
`;

const PageMovingBtn = styled(pageMovingBtn)`
  transform: ${(props) => props.rightbtn && 'rotate(180deg)'};
  cursor: pointer;
`;

const PageBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageBtn = styled.div`
  font-size: 25px;
  padding: 8px;
`;

const WriteButton = styled.button`
  width: 152px;
  height: 48px;
  margin: 0 50px 0 1274px;
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  background-color: transparent;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
`;

export default MainPage;
