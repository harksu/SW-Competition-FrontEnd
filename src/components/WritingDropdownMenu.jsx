import { useState } from 'react';
import styled from 'styled-components';
// import Axios from '../lib/axios';

const CampusData = [
  { id: '01', value: '자연캠' },
  { id: '02', value: '인문캠' },
];

function WritingDropdownMenu() {
  // 열리는
  const [isShow, setIsShow] = useState(false);

  // 학교 출력 useState
  const [selectedDropValue, setSelectedDropValue] = useState('캠퍼스');
  // onChange 이벤트가 발생한 target을 받아와 value 값 할당

  const handleDropCampus = (e) => {
    const { value } = e.target;
    // 제목에 넣을 데이터
    setSelectedDropValue(
      CampusData.filter((el) => el.value === value[0].value),
    );
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
        <DropDownButton onClick={setIsShow} onChange={handleDropCampus}>
          {selectedDropValue}
        </DropDownButton>
      </div>
      {isShow && (
        <CampusBox onClick={handleShow}>
          <div>
            {CampusData.map((el) => (
              <option key={el.id}>{el.value}</option>
            ))}
          </div>
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
  border-radius: 5px 5px 0px 0px;
  margin-top: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CampusBox = styled.div`
  width: 70px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 15px 10px 15px 10px;
  background: #ffffff;
  border: 2px solid #e2e2e2;
  border-radius: 0px 0px 5px 5px;
`;

export default WritingDropdownMenu;
