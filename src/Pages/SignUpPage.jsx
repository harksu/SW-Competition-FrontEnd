import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// 리팩터링은 나중에 하겠습니다.
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
  const [sendData, setSendData] = useState({
    email: '',
    name: '',
    nickname: '',
    password: '',
    username: '',
    emailAuthKey: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const option = {
    getAuthUrl: 'http://13.125.85.216:8080/api/sign-up/email?',
    getCheckUrl: 'http://13.125.85.216:8080/api/sign-up/email/check?',
    signUpUrl: 'http://13.125.85.216:8080/api/sign-up',
  };

  const getAuth = () => {
    const emailvalue = sendData.email;
    axios({
      method: 'post',
      url: option.getAuthUrl,
      params: {
        email: emailvalue,
      },
    }).then(console.log(emailvalue));
  };

  const getCheck = () => {
    const checkvalue = sendData.emailAuthKey;
    axios({
      method: 'post',
      url: option.getCheckUrl,
      params: {
        code: checkvalue,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setIsChecked(true);
          alert(isChecked);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsChecked(false);
        alert(isChecked);
      });
  };

  const SignUp = () => {
    console.log(sendData);
    if (isChecked) {
      axios({
        method: 'post',
        url: option.signUpUrl,
        data: {
          ...sendData,
        },
      })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('인증번호 ㄲ ');
    }
  };

  return (
    <SignUpContainer>
      <SignHeader>회원가입</SignHeader>
      <InputContainer>
        <InputFormBox>
          <UserInfoText>이름</UserInfoText>
          <UserInputBox
            placeholder="예) 김명지"
            value={sendData.name}
            onChange={(e) => {
              setSendData({ ...sendData, name: e.target.value });
            }}
          />
        </InputFormBox>
        <UserInfoInputContainer
          exid="예) MJUyogoyogu"
          expw="예) MJU12345678"
          data={sendData}
          event={setSendData}
        />
        <EmailInfoInputContainer
          type="email"
          email="이메일"
          alertText="인증번호 받기"
          exemail="예) MJU@mju.ac.kr"
          data={sendData}
          event={setSendData}
          getevent={getAuth}
        />
        <EmailInfoInputContainer
          type="confirm"
          email="이메일 인증번호"
          alertText="인증번호 확인"
          exemail="예) MJU12345667"
          data={sendData}
          event={setSendData}
          getevent={getCheck}
        />
        {!isChecked && (
          <AlertEmailText>인증번호가 올바르지 않습니다 </AlertEmailText>
        )}
        {/* 이거 나중에 유효할 때 블럭 값 채워주도록 수정  */}
        <LoginButton onClick={SignUp}>
          <ButtonText>회원가입하기</ButtonText>
        </LoginButton>
      </InputContainer>
    </SignUpContainer>
  );
}

function UserInfoInputContainer({ exid, expw, data, event }) {
  return (
    <UserInfoInputFormBox>
      <InputFormBox>
        <UserInfoText>아이디</UserInfoText>
        <UserInputBox
          placeholder={exid}
          value={data.username || ''}
          onChange={(e) => {
            event({
              ...data,
              username: e.target.value,
              nickname: e.target.value,
            });
          }}
        />
      </InputFormBox>
      <InputFormBox>
        <UserInfoText>비밀번호</UserInfoText>
        <UserInputBox
          placeholder={expw}
          type="password"
          value={data.password || ''}
          onChange={(e) => {
            event({ ...data, password: e.target.value });
          }}
        />
      </InputFormBox>
    </UserInfoInputFormBox>
  );
}
function EmailInfoInputContainer({
  email,
  alertText,
  exemail,
  data,
  event,
  type,
  getevent,
}) {
  return (
    <EmailInputFormBox>
      <EmailInputBox>
        <UserInfoText>{email}</UserInfoText>
        {type === 'email' ? (
          <UserInputBox
            placeholder={exemail}
            value={data.email || ''}
            onChange={(e) => {
              event({ ...data, email: e.target.value });
            }}
          />
        ) : (
          <UserInputBox
            placeholder={exemail}
            value={data.emailAuthKey || ''}
            onChange={(e) => {
              event({ ...data, emailAuthKey: e.target.value });
            }}
          />
        )}
      </EmailInputBox>
      {type === 'email' ? (
        <EmailButton onClick={getevent}>
          <EmailButtonText>{alertText}</EmailButtonText>
        </EmailButton>
      ) : (
        <EmailButton onClick={getevent}>
          <EmailButtonText>{alertText}</EmailButtonText>
        </EmailButton>
      )}
    </EmailInputFormBox>
  );
}

export default SignUpPage;
const SignUpContainer = styled(Container)`
  margin: 42px auto 12px auto;
`;
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
  margin: 2px 95px 0px 65px; //이것 때문에 버튼 밑에 붙음
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
