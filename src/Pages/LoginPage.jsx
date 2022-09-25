import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assests/logo.png';

function LoginPage() {
  // eslint-disable-next-line no-unused-vars
  const [isValid, setIsValid] = useState(true);
  return (
    <div>
      <Container>
        <SignHeader> 로그인</SignHeader>
        <InputContainer>
          <InputFormBox>
            <InputForm text="아이디" isValid={isValid} />
          </InputFormBox>{' '}
          <InputFormBox>
            <InputForm text="비밀번호" isValid={isValid} />
          </InputFormBox>{' '}
          <QuestionText>아직 회원이 아니신가요?</QuestionText>
          <LoginButton>
            <ButtonText>로그인하기</ButtonText>
          </LoginButton>
        </InputContainer>
      </Container>
    </div>
  );
}

export default LoginPage;
function InputForm({ text, isValid }) {
  return (
    <>
      <Text>{text}</Text>
      <InputBox />
      {isValid ? (
        <AlertText>존재하지 않는 {text}입니다</AlertText>
      ) : (
        <AlertText>유효한 아이디 입니다</AlertText>
      )}
    </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%; //피그마 기준 계산값입니다
  height: 70vh; //피그마 기준 계산값입니다
  background-color: ${({ theme }) => theme.colors.white};
  margin: 69px auto 55px auto;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const SignHeader = styled.div`
  display: flex;
  width: 100%;
  height: 14%;
  background-color: #b5b5b5;
  color: ${({ theme }) => theme.colors.white};
  font-size: 35px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 26px auto 33px auto;
  justify-content: space-around;
  align-items: center;
  width: 65%;
  height: 78%;
  // background-color: ${({ theme }) => theme.colors.pink};
`;

export const Text = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin-left: 13px;
`;

export const AlertText = styled(Text)`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.blue};
  margin-left: 13px;
`;

const QuestionText = styled(AlertText)`
  color: #b5b5b5;
  font-weight: 800;
  font-size: 22px;
  margin-top: 40px;
  margin-bottom: 12px;
`;
export const InputBox = styled.input`
  width: 100%;
  height: 42%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const LoginButton = styled.div`
  display: flex;
  width: 44%;
  height: 12%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #b5b5b5;
  margin-bottom: 33px;
  cursor: pointer;
`;
const ButtonText = styled(Text)`
  color: #ffffff;
  font-weight: 400px;
  font-size: 28px;
`;

const InputFormBox = styled.div`
  margin-top: 27px;
  width: 73%;
  height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
