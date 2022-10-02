import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authToken } from '../Atoms/atom';

import ContentList from '../Components/MainPage/ContentList';
import { ReactComponent as pageMovingBtn } from '../assests/pageMovingBtn.svg';

function MainPage() {
  const navigate = useNavigate();
  const goWriting = () => {
    navigate('/writing');
  };

  const [sorting, setSorting] = useState('createAt');
  const onClickNew = () => {
    setSorting('createAt');
  };
  const onClickBest = () => {
    setSorting('best');
  };

  // 글 목록 불러오기
  const loginToken = useRecoilValue(authToken);
  const [posts, setPosts] = useState([]);

  const postAPI = async () => {
    if (sorting === 'createAt') {
      try {
        const res = await axios.get('/api/boards/all?sort=id', {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });
        setPosts(res.data.result.data);
      } catch (err) {
        console.log('불러오기 실패!');
      }
    }
    if (sorting === 'best') {
      try {
        const res = await axios.get('/api/boards/all?sort=likesCount', {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });
        setPosts(res.data.result.data);
      } catch (err) {
        console.log('불러오기 실패!');
      }
    }
  };

  // 최신순, 좋아요순 변경 시 렌더링
  useEffect(() => {
    postAPI();
  }, [posts, sorting]);

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * 10;
  const totalPages = Math.ceil(posts.length / 10);
  const pageNumber = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pageNumber.push(i);
  }

  return (
    <MainWrap>
      <MainTitle>명지 의견 나눔함</MainTitle>
      <MainContainer>
        <ListContainer>
          <ListHeader>
            <Header1stContent active={sorting === 'best'}>
              <button type="button" onClick={onClickNew}>
                최신순
              </button>
              <button type="button" onClick={onClickBest}>
                인기순
              </button>
            </Header1stContent>
            <Header2ndContent>
              <p>순번</p>
              <p>제목</p>
              <p>작성자</p>
              <p>공감</p>
              <p>답변</p>
            </Header2ndContent>
          </ListHeader>
          <ContentList posts={posts} totalPages={totalPages} offset={offset} />
        </ListContainer>
        <WriteButton onClick={goWriting}>작성하기</WriteButton>
        <ListPagesButton>
          <PageMovingBtn />
          <ScrollWidth>
            <PageBtnContainer>
              {pageNumber.map((pages) => (
                <PageBtn
                  key={pages}
                  onClick={() => {
                    setCurrentPage(pages);
                  }}
                  active={currentPage === pages}
                >
                  {pages}
                </PageBtn>
              ))}
            </PageBtnContainer>
          </ScrollWidth>
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

  button {
    width: 65px;
    height: 26px;
    margin-bottom: 20px;
    padding: 5px;
    font-size: 20px;
    font-weight: 400;
    border: none;
    background-color: transparent;
    user-select: none;
    cursor: pointer;

    // 렌더링 default 값 => 최신순
    &:first-child {
      font-weight: ${(props) => (props.active ? '' : '600')};
      color: ${(props) => (props.active ? 'none' : '#0186D1')};
    }

    // 인기순 클릭 시 => 인기순
    &:last-child {
      font-weight: ${(props) => (props.active ? '600' : '')};
      color: ${(props) => (props.active ? '#0186D1' : 'none')};
    }
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
    user-select: none;
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

const ScrollWidth = styled.div`
  /* display: flex; */
  /* justify-content: flex-start; */
  width: 165px;
  height: 40px;
  overflow: hidden;
`;

const PageBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const PageBtn = styled.div`
  /* margin: 10px; */
  margin: 5px 10px 5px 10px;
  font-weight: ${(props) => (props.active ? '700' : '600')};
  font-size: ${(props) => (props.active ? '28px' : '25px')};
  color: ${(props) => (props.active ? '#0186D1' : 'none')};
  cursor: pointer;
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
