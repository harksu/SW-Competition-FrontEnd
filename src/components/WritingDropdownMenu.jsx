import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { WritingAtom } from '../Atoms/WritingAtom';

const CampusData = [
  { id: '01', value: '자연캠' },
  { id: '02', value: '인문캠' },
];

function WritingDropdownMenu() {
  const [test, setTest] = useRecoilState(WritingAtom);
  const [isShow, setIsShow] = useState(false);
  const [tag] = useState('');

  const handleClickTag = (e) => {
    setTest(e.target.value);
  };

  const handleShow = async () => {
    try {
      setIsShow(!isShow);
    } catch (err) {
      console.log('에러');
    }
  };

  return (
    <DropDownWrapper>
      <div>
        <DropDownButton onClick={setIsShow} tag={tag} value={tag}>
          {test}
        </DropDownButton>
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

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #e2e2e2;
  background: none;
  margin-top: 12px;

  cursor: pointer;
`;

const CampusBox = styled.div`
  width: 70px;
  height: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 50;

  font-size: 15px;
  padding: 25px 10px 25px 10px;
  background: #ffffff;

  border: 2px solid #e2e2e2;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
`;

const CampusButton = styled.option`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export default WritingDropdownMenu;
