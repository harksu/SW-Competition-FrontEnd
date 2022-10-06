import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import instance from '../lib/Request';

import ContentList from '../Components/MainPage/ContentList';
import Pagination from '../Components/MainPage/Pagination';

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

  const [posts, setPosts] = useState([]);

  const postAPI = async () => {
    try {
      const res = await instance.get('/api/boards/all?sort=id');
      setPosts(res.data.result.data);
    } catch (err) {
      console.log('불러오기 실패!');
    }
  };

  const sortAPI = async () => {
    if (sorting === 'createAt') {
      try {
        const res = await instance.get('/api/boards/all?sort=id');
        setPosts(res.data.result.data);
      } catch (err) {
        console.log('불러오기 실패!');
      }
    }
    if (sorting === 'best') {
      try {
        const res = await instance.get('/api/boards/all?sort=likesCount');
        setPosts(res.data.result.data);
      } catch (err) {
        console.log('불러오기 실패!');
      }
    }
  };

  useEffect(() => {
    postAPI();
  }, []);

  useEffect(() => {
    sortAPI();
  }, [sorting]);

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
              <p>|</p>
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
          <ContentList posts={posts} />
        </ListContainer>
        <WriteButton onClick={goWriting}>작성하기</WriteButton>
        <Pagination posts={posts} />
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

  user-select: none;
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
    margin-top: 4px;
    font-size: 22px;
  }

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
    margin-top: 3px;
    font-weight: 500;
    font-size: 25px;
    user-select: none;
  }
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
  user-select: none;
  cursor: pointer;
`;

export default MainPage;
