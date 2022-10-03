import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { PageOffset } from '../../Atoms/PageOffset';

import { ReactComponent as FullHeartBtn } from '../../assests/FullHeart.svg';
import { ReactComponent as blueCheck } from '../../assests/blueCheck.svg';

function ContentList({ posts }) {
  const offset = useRecoilValue(PageOffset);

  // 순번을 새로운 값으로 객체마다 넣기
  const viewPosts = [...posts];
  for (let i = 1; i <= posts.length; i += 1) {
    viewPosts[i - 1].order = i;
  }

  // map중첩해결 - 제목 클릭 시 해당 /detail/${boardId} 값으로 이동
  const navigate = useNavigate();
  const [isClickDetail, setIsClickDetail] = useState(false);

  const clickDetail = (order, id) => {
    setIsClickDetail(!isClickDetail);
    viewPosts[order].isClickDetail = !isClickDetail;
    navigate(`/detail/${id}`);
  };

  useEffect(() => {}, [isClickDetail]);

  return (
    <ListContainer>
      <Contents>
        {viewPosts.slice(offset, offset + 10).map((data) => (
          <ContentContainer key={data.boardId}>
            <ContentNum>{data.order}</ContentNum>
            <TitleBox onClick={() => clickDetail(data.order, data.boardId)}>
              <ContentTag>[{data.tag}]</ContentTag>
              <ContentTitle>&nbsp;{data.title}</ContentTitle>
            </TitleBox>
            <ContentWriter>{data.writer_name}</ContentWriter>
            <ContentSympathy>
              <SympathyContainer>
                <FullHeartBtnStyle />
                {data.likesCount}
              </SympathyContainer>
            </ContentSympathy>
            <ContentAnswer>
              {data.isReplied ? <BlueCheckStyle /> : ''}
            </ContentAnswer>
          </ContentContainer>
        ))}
      </Contents>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 100%;
  height: 80%;
`;

// 한 페이지 당 10개 행
const Contents = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  width: 100%;
  height: 100%;
  border: 2px 2px 0 2px solid #ededed;
`;

// 행 당 5개의 목록
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 11% 51% 13% 13% 13%;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #ededed;
  text-align: center;
`;

const ContentNum = styled.div`
  padding-top: 20px;
  border-right: 2px solid #ededed;
  font-size: 25px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  border-right: 2px solid #ededed;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const ContentTag = styled.div`
  font-weight: 700;
  font-size: 23px;
`;

const ContentTitle = styled.div`
  font-size: 23px;
`;

const ContentWriter = styled.div`
  padding: 20px 2px 0 10px;
  border-right: 2px solid #ededed;
  font-size: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ContentSympathy = styled.div`
  display: flex;
  align-items: center;
  border-right: 2px solid #ededed;
`;

const SympathyContainer = styled.div`
  display: flex;
  margin-left: 35%;
  font-size: 20px;
`;

const FullHeartBtnStyle = styled(FullHeartBtn)`
  margin-right: 14px;
`;

const BlueCheckStyle = styled(blueCheck)``;

const ContentAnswer = styled.div`
  padding-top: 18px;
`;

export default ContentList;
