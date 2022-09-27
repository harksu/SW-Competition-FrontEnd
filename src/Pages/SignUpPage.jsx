import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 리팩터링,스타일링 ++console은 나중에 리팩터링 끝나면 다 지우겠습니다.
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
  const [regExprees, setRegExpress] = useState({
    nameRegExpress: false,
    pwRegExpress: false,
    emailRegExpress: false,
  });

  const option = {
    getAuthUrl: 'http://13.125.85.216:8080/api/sign-up/email?',
    getCheckUrl: 'http://13.125.85.216:8080/api/sign-up/email/check?',
    signUpUrl: 'http://13.125.85.216:8080/api/sign-up',
  };
  const nameRegEx = /^[가-힣]{2,8}$/;
  const pwRegEx = /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  // eslint-disable-next-line prefer-regex-literals
  const emailRegEx = new RegExp('[a-z0-9]+@mju.ac.kr');

  const navigate = useNavigate();
  const gologin = () => {
    navigate('/');
  };

  const getAuth = () => {
    const emailvalue = sendData.email;
    if (regExprees.emailRegExpress) {
      axios({
        method: 'post',
        url: option.getAuthUrl,
        params: {
          email: emailvalue,
        },
      }).then(console.log(emailvalue));
    } else {
      window.alert('이메일 형식은 @mju.ac.kr입니다');
    }
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
        if (response.status === 200) {
          console.log(response);
          setIsChecked(true);
          alert('이메일 인증에 성공했습니다');
        }
      })
      .catch((error) => {
        console.log(error);
        setIsChecked(false);
        alert('인증번호를 다시 확인해주세요');
      });
  };

  const SignUp = () => {
    console.log(sendData); // 이거 나중에 삭제
    const { nameRegExpress, pwRegExpress, emailRegExpress } = regExprees;
    const isValid = nameRegExpress && pwRegExpress && emailRegExpress;
    if (isChecked && isValid) {
      axios({
        method: 'post',
        url: option.signUpUrl,
        data: {
          ...sendData,
        },
      })
        .then((response) => {
          console.log(response);
          gologin();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!isValid) {
      alert('입력 형식이 올바르지 않습니다.');
    } else {
      alert('인증번호 확인이 완료되지 않았습니다.');
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
              const { value } = e.target;
              setSendData({ ...sendData, name: e.target.value });
              console.log(value.match(nameRegEx));
              if (value.match(nameRegEx)) {
                setRegExpress({ ...regExprees, nameRegExpress: true });
              } else {
                setRegExpress({ ...regExprees, nameRegExpress: false });
              }
              // console.log(regExprees);
            }}
          />
        </InputFormBox>
        <UserInfoInputContainer
          exid="예) MJUyogoyogu"
          expw="예) MJU12345678"
          data={sendData}
          event={setSendData}
          reg={pwRegEx}
          regEvent={setRegExpress}
          regstate={regExprees}
        />
        <EmailInfoInputContainer
          type="email"
          email="이메일"
          alertText="인증번호 받기"
          exemail="예) MJU@mju.ac.kr"
          data={sendData}
          event={setSendData}
          getevent={getAuth}
          reg={emailRegEx}
          regEvent={setRegExpress}
          regstate={regExprees}
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
        {isChecked ? (
          <EmptyBlock />
        ) : (
          <AlertEmailText>인증번호가 올바르지 않습니다 </AlertEmailText>
        )}
        <LoginButton onClick={SignUp}>
          <ButtonText>회원가입하기</ButtonText>
        </LoginButton>
      </InputContainer>
    </SignUpContainer>
  );
}

function UserInfoInputContainer({
  exid,
  expw,
  data,
  event,
  reg,
  regEvent,
  regstate,
}) {
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
            const { value } = e.target;
            event({ ...data, password: e.target.value });
            console.log(value.match(reg));
            if (value.match(reg)) {
              regEvent({ ...regstate, pwRegExpress: true });
            } else {
              regEvent({ ...regstate, pwRegExpress: false });
            }
            console.log(regstate);
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
  reg,
  regstate,
  regEvent,
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
              const { value } = e.target;
              event({ ...data, email: e.target.value });
              console.log(reg.test(value));
              if (reg.test(value)) {
                regEvent({ ...regstate, emailRegExpress: true });
              } else {
                regEvent({ ...regstate, emailRegExpress: false });
              }
              console.log(regstate);
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

export default React.memo(SignUpPage);
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

const EmptyBlock = styled.div`
  height: 24px; //입력값 없을 때 스타일 깨지는거 방지용
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
