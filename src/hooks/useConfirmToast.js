/* eslint-disable react/jsx-filename-extension */
import { toast } from 'react-toastify';
import styled from 'styled-components';

function dismissToast() {
  toast.dismiss();
}

function ConfirmToastContent({ text, confirmCallback }) {
  return (
    <ConfirmToastContainer>
      <ToastText>{text}</ToastText>

      <BtnContainer>
        <BtnStyled type="submit" onClick={confirmCallback}>
          확인
        </BtnStyled>
        <BtnStyled type="submit" onClick={dismissToast}>
          취소
        </BtnStyled>
      </BtnContainer>
    </ConfirmToastContainer>
  );
}

function ConfirmToast({ text, confirmCallback }) {
  toast(ConfirmToastContent({ text, confirmCallback }), {
    containerId: 'confirm',
  });
}

export default ConfirmToast;

const ConfirmToastContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ToastText = styled.p`
  line-height: 30px;
  font-size: 18px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;
const BtnStyled = styled.button`
  border: none;
  background-color: #bde0f3;
  border-radius: 5px;
  width: 100px;
  height: 32px;
  margin-top: 30px;
  font-weight: 600;
`;
