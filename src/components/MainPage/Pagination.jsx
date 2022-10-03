import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { PageOffset } from '../../Atoms/PageOffset';

import { ReactComponent as pageMovingBtn } from '../../assests/pageMovingBtn.svg';

function Pagination({ posts }) {
  const totalPages = Math.ceil(posts.length / 10);
  const [currentPage, setCurrentPage] = useState(1);
  const [offsetValue, setOffsetValue] = useRecoilState(PageOffset);
  const [slicedPage, setSlicedPage] = useState([]);
  const [totalArray, setTotalArray] = useState([]);
  const [currentPageArray, setCurrentPageArray] = useState([]);

  const sliceArray = (total, limit) => {
    const totalPageArray = Array(total)
      .fill()
      .map((_, i) => i);
    return Array(Math.ceil(total / limit))
      .fill()
      .map(() => totalPageArray.splice(0, limit));
  };

  useEffect(() => {
    setSlicedPage(sliceArray(totalPages, 5));

    if (offsetValue < posts.length) {
      setOffsetValue((currentPage - 1) * 10);
    }

    setTotalArray(slicedPage);
    setCurrentPageArray(slicedPage[0]);

    if (currentPage % 5 === 1) {
      setCurrentPageArray(totalArray[Math.floor(currentPage / 5)]);
    } else if (currentPage % 5 === 0) {
      setCurrentPageArray(totalArray[Math.floor(currentPage / 5) - 1]);
    }
    // console.log(currentPage);
    // console.log(offsetValue);
    // console.log(totalArray);
    console.log(currentPageArray);
  }, [totalPages, currentPage]);

  return (
    <ListPagesButton>
      <MovingBtnWrap
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MovingBtnStyle />
      </MovingBtnWrap>
      <PageBtnContainer>
        {/* {currentPageArray.map((i) => (
          <PageBtn
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </PageBtn>
        ))} */}
        <PageBtn />
      </PageBtnContainer>
      <MovingBtnWrap>
        <MovingBtnStyle
          rightbtn="true"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </MovingBtnWrap>
    </ListPagesButton>
  );
}

const ListPagesButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 40px;
  border: 1px solid #adadad;
  border-radius: 5px;
`;

const MovingBtnWrap = styled.button`
  border: none;
  background-color: transparent;
`;

const MovingBtnStyle = styled(pageMovingBtn)`
  transform: ${(props) => props.rightbtn && 'rotate(180deg)'};
  cursor: pointer;
`;

const PageBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const PageBtn = styled.div`
  margin: 5px 10px 5px 10px;
  font-weight: ${(props) => (props.active ? '700' : '600')};
  font-size: ${(props) => (props.active ? '28px' : '25px')};
  color: ${(props) => (props.active ? '#0186D1' : 'none')};
  cursor: pointer;
`;

export default Pagination;
