import React from 'react';
import styled from 'styled-components';
import {
  Container,
  SignHeader,
  InputBox,
  Text,
  AlertText,
  LoginButton,
  ButtonText,
} from './LoginPage';

function SignUpPage() {
  return (
    <Container>
      <SignHeader>회원가입</SignHeader>
      <InputContainer>
        <InputFormBox>
          <UserInfoText>이름</UserInfoText>
          <UserInputBox />
        </InputFormBox>
        <UserInfoInputFormBox>
          <InputFormBox>
            <UserInfoText>아이디</UserInfoText>
            <UserInputBox />
          </InputFormBox>
          <InputFormBox>
            <UserInfoText>비밀번호</UserInfoText>
            <UserInputBox />
          </InputFormBox>
        </UserInfoInputFormBox>

        <EmailInputFormBox>
          <EmailInputBox>
            <UserInfoText>이메일</UserInfoText>
            <UserInputBox />
          </EmailInputBox>
          <EmailButton>
            <EmailButtonText>인증번호 받기 </EmailButtonText>
          </EmailButton>
        </EmailInputFormBox>
        <EmailInputFormBox>
          <EmailInputBox>
            <UserInfoText>이메일 인증번호</UserInfoText>
            <UserInputBox />
          </EmailInputBox>
          <EmailButton>
            <EmailButtonText>인증번호 받기 </EmailButtonText>
          </EmailButton>
        </EmailInputFormBox>
        <AlertEmailText>인증번호가 올바르지 않습니다 </AlertEmailText>
        <LoginButton>
          <ButtonText>회원가입하기</ButtonText>
        </LoginButton>
      </InputContainer>
    </Container>
  );
}

export default SignUpPage;
const AlertEmailText = styled(AlertText)`
  line-height: 24px;
  font-weight: 700;
  font-size: 21px;
  margin-top: 16px;
  margin-bottom: 30px;
  font-style: normal;
  color: #0186d1;
`;

const InputContainer = styled.div`
  //background-color: blue;
  margin: 2px 95px 54px 65px;
  // width: 100%;
  // 65,26,95,54
`;

const InputFormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  //height: 98px;
  //background-color: red;
  justify-content: space-between;
`;
const EmailInputBox = styled(InputFormBox)`
  width: 500px;
`;

const UserInfoInputFormBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  //height: 98px;
  //background-color: pink;
  justify-content: space-between;
`;
const EmailInputFormBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  //height: 98px;
  //background-color: pink;
  justify-content: space-between;
  align-items: center;
`;

const UserInputBox = styled(InputBox)`
  border: 0 solid black;
  width: 100%; // 이메일일경우는 59.5프로
  height: 60px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 10px;
  ::placeholder {
    font-size: 23px;
    font-weight: 400;
    color: #b5b5b5;
  }
  font-size: 23px;
  font-weight: 400;
  color: #b5b5b5;
  padding-left: 19px;
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const EmailButton = styled.div`
  width: 140px;
  height: 44px;
  cursor: pointer;
  background-color: #0186d1;
  display: flex;
  margin-bottom: 5px; //이거 피그마상 맞추려면 컨테이너가 너무 복잡해집니다
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const EmailButtonText = styled.p`
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
`;

const UserInfoText = styled(Text)`
  font-size: 25px;
  line-height: 28px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 10px;
`;
