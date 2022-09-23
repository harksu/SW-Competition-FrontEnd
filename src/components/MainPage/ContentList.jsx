import React from 'react';
import styled from 'styled-components';

import { ReactComponent as HeartBtn } from '../../assests/HeartBtn.svg';
import ListDemoData from './ListDemoData';

function ContentList() {
  return (
    <ListContainer>
      <Contents>
        {ListDemoData.map((data) => (
          <ContentContainer key={data.order}>
            <ContentNum>{data.order}</ContentNum>
            <ContentTitle>{data.title}</ContentTitle>
            <ContentWriter>{data.userName}</ContentWriter>
            <ContentSympathy>
              <SympathyContainer>
                <HeartBtnStyle />
                {data.sympathy}
              </SympathyContainer>
            </ContentSympathy>
            <ContentAnswer>{data.answer}</ContentAnswer>
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

// 페이지 당 10개 행
const Contents = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  width: 100%;
  height: 100%;
  border: 2px 2px 0 2pxsolid #ededed;
`;

// 행 당 5개 목록
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 7% 63% 10% 10% 10%;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #ededed;
`;

const ContentNum = styled.div`
  padding-top: 12%;
  border-right: 2px solid #ededed;
  text-align: center;
`;

const ContentTitle = styled.div`
  padding: 1.5% 0 0 5.5%;
  border-right: 2px solid #ededed;
  cursor: pointer;
`;

const ContentWriter = styled.div`
  padding-top: 8%;
  border-right: 2px solid #ededed;
  text-align: center;
`;

const SympathyContainer = styled.div`
  display: flex;
  margin-left: 35%;
`;

const HeartBtnStyle = styled(HeartBtn)`
  margin-right: 10px;
  cursor: pointer;
`;

const ContentSympathy = styled.div`
  padding-top: 8%;
  border-right: 2px solid #ededed;
  text-align: center;
`;

const ContentAnswer = styled.div`
  padding-top: 8%;
  text-align: center;
`;

export default ContentList;
