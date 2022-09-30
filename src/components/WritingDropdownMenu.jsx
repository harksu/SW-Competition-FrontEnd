/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
// import Axios from '../lib/axios';
import { useRecoilState } from 'recoil';
import { WritingAtom } from '../Atoms/WritingAtom';

const CampusData = [
  { id: '01', value: '자연캠' },
  { id: '02', value: '인문캠' },
];

function WritingDropdownMenu() {
  const [test, setTest] = useRecoilState(WritingAtom);

  // 열리는
  const [isShow, setIsShow] = useState(false);

  console.log('테스트 자체: ', test);

  const handleClickTag = (e) => {
    console.log('캠퍼스: ', e.target.value);
    setTest(e.target.value);
  };

  const handleShow = async () => {
    try {
      // const res = await Axios.post('/api/boards');
      setIsShow(!isShow);
      // console.log(res);
    } catch (err) {
      console.log('에러');
    }
  };

  return (
    <DropDownWrapper>
      <div>
        <DropDownButton onClick={setIsShow}>캠퍼스</DropDownButton>
      </div>
      {isShow && (
        <CampusBox onClick={handleShow}>
          <>
            {CampusData.map((taging) => (
              <CampusButton key={taging.id} onClick={handleClickTag}>
                {taging.value}
              </CampusButton>
            ))}
          </>
        </CampusBox>
      )}
    </DropDownWrapper>
  );
}

const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const DropDownButton = styled.button`
  width: 94px;
  height: 30px;
  background: none;
  border: 2px solid #e2e2e2;
  /* border-radius: 5px 5px 0px 0px; */
  margin-top: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CampusBox = styled.div`
  width: 70px;
  height: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 15px 20px 20px 10px;
  background: #ffffff;
  border: 2px solid #e2e2e2;
  border-radius: 0px 0px 5px 5px;
`;

const CampusButton = styled.option`
  margin-bottom: 10px;
  margin-top: 10px;
`;
export default WritingDropdownMenu;
