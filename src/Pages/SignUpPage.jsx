import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Container,
  SignHeader,
  InputBox,
  Text,
  AlertText,
  LoginButton,
  ButtonText,
  LogoImage,
} from './LoginPage';
import backgroundImage from '../assests/logo.svg';

function SignUpPage() {
  const showToastMessage = () => {
    toast('인증번호가 확인되었습니다', { containerId: 'common' });
  };
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
        url: `${process.env.REACT_APP_API_URL}api/sign-up/email?`,
        params: {
          email: emailvalue,
        },
      }).then(window.alert('인증번호를 발송하였습니다.'));
    } else {
      window.alert('이메일 형식은 @mju.ac.kr입니다');
    }
  };

  const getCheck = () => {
    const checkvalue = sendData.emailAuthKey;
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/sign-up/email/check?`,
      params: {
        code: checkvalue,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setIsChecked(true);
          alert('이메일 인증에 성공했습니다');
        }
      })
      .catch(() => {
        setIsChecked(false);
        alert('인증번호를 다시 확인해주세요');
      });
  };

  const SignUp = () => {
    const { nameRegExpress, pwRegExpress, emailRegExpress } = regExprees;
    const isValid = nameRegExpress && pwRegExpress && emailRegExpress;
    if (isChecked && isValid) {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}api/sign-up`,
        data: {
          ...sendData,
        },
      }).then(() => {
        showToastMessage();
        gologin();
      });
    } else if (!isValid) {
      alert('입력 형식이 올바르지 않습니다.');
    } else {
      alert('인증번호 확인이 완료되지 않았습니다.');
    }
  };

  return (
    <>
      <SignUpContainer>
        <SignHeader>회원가입</SignHeader>
        <InputContainer>
          <InputFormBox>
            <UserInfoText name>이름</UserInfoText>
            <UserInputBox
              placeholder="예) 김명지"
              value={sendData.name}
              onChange={(e) => {
                const { value } = e.target;
                setSendData({ ...sendData, name: e.target.value });
                if (value.match(nameRegEx)) {
                  setRegExpress({ ...regExprees, nameRegExpress: true });
                } else {
                  setRegExpress({ ...regExprees, nameRegExpress: false });
                }
              }}
            />
            {regExprees.nameRegExpress ? (
              <EmptyBlock />
            ) : (
              <AlertIdPwText>이름이 올바르지 않습니다. </AlertIdPwText>
            )}
          </InputFormBox>
          <UserInfoInputContainer
            exid="예) MJUyogoyogu"
            expw="예) MJU12345678!"
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
          <LoginButton onClick={SignUp} isChecked={isChecked}>
            <ButtonText>회원가입</ButtonText>
          </LoginButton>
        </InputContainer>
      </SignUpContainer>
      <EmptyDiv />
    </>
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
        {data.username ? (
          <EmptyBlock />
        ) : (
          <AlertIdPwText>아이디가 올바르지 않습니다. </AlertIdPwText>
        )}
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
            if (value.match(reg)) {
              regEvent({ ...regstate, pwRegExpress: true });
            } else {
              regEvent({ ...regstate, pwRegExpress: false });
            }
          }}
        />
        {regstate.pwRegExpress ? (
          <EmptyBlock />
        ) : (
          <AlertIdPwText>비밀번호가 올바르지 않습니다. </AlertIdPwText>
        )}
      </InputFormBox>
      <SignLogoImage src={backgroundImage} alt="dd" />
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
        {type === 'email' ? (
          <UserInfoText>{email}</UserInfoText>
        ) : (
          <UserInfoText email>{email}</UserInfoText>
        )}

        {type === 'email' ? (
          <UserInputBox
            placeholder={exemail}
            value={data.email || ''}
            onChange={(e) => {
              const { value } = e.target;
              event({ ...data, email: e.target.value });
              if (reg.test(value)) {
                regEvent({ ...regstate, emailRegExpress: true });
              } else {
                regEvent({ ...regstate, emailRegExpress: false });
              }
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
      <EmailButton onClick={getevent}>
        <EmailButtonText>{alertText}</EmailButtonText>
      </EmailButton>
    </EmailInputFormBox>
  );
}

export default React.memo(SignUpPage);

const SignLogoImage = styled(LogoImage)`
  width: 128px;
  height: 130px;
  position: absolute;
  bottom: 4.5%;
  right: 9%;
  -webkit-user-drag: none;
  user-select: none;
`;

const SignUpContainer = styled(Container)`
  margin: 42px auto 12px auto;
  height: 70%;
`;

const AlertEmailText = styled(AlertText)`
  line-height: 24px;
  font-weight: 700;
  font-size: 21px;
  margin-top: 16px;
  margin-bottom: 30px;
  font-style: normal;
  color: #0186d1;
  user-select: none;
`;

const AlertIdPwText = styled(AlertEmailText)`
  width: 150%;
  margin-bottom: 0px;
  user-select: none;
`;

const EmptyBlock = styled.div`
  height: 24px; //입력값 없을 때 스타일 깨지는거 방지용
  margin-top: 16px;
`;

const InputContainer = styled.div`
  margin: 0px 95px 54px 65px;
`;

const InputFormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 37%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const EmailInputBox = styled(InputFormBox)`
  width: 500px;
`;

const UserInfoInputFormBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const EmailInputFormBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const EmptyDiv = styled.div`
  height: 30px;
`;

const UserInputBox = styled(InputBox)`
  border: 0 solid black;
  width: 100%;
  height: 60px;

  background-color: white;
  border-radius: 10px;
  border: 2px solid #bcccf6;
  ::placeholder {
    font-size: 23px;
    font-weight: 400;
    color: #b5b5b5;
  }
  font-size: 23px;
  font-weight: 400;
  color: black;
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
  margin-bottom: 27px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  user-select: none;
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
  margin-top: ${(props) => (props.name ? '50px' : '0px')};
  margin-top: ${(props) => (props.email ? '24px' : '0px')};
  margin-bottom: 10px;
  user-select: none;
`;
