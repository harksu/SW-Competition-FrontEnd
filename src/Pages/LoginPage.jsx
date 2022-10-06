import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Cookies } from 'react-cookie';
import { authToken } from '../Atoms/atom';
import backgroundImage from '../assests/logo.svg';

const cookies = new Cookies();
export const setCookie = (name, value, option) =>
  cookies.set(name, value, { ...option });

export const getCookie = (name) => cookies.get(name);

export const removeCookie = (name) => cookies.remove(name);

function LoginPage() {
  const [idValid, setIdValid] = useState(true);
  const [pwValid, setPwValid] = useState(true);
  const [userInfo, setUserInfo] = useState({
    password: '',
    username: '',
  });
  const setAuthToken = useSetRecoilState(authToken);
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/main');
  };
  const goSignUP = () => {
    navigate('/signup');
  };

  const login = () => {
    const { username, password } = userInfo;
    if (username && password) {
      axios
        .post(`${process.env.REACT_APP_API_URL}api/sign-in`, {
          ...userInfo,
        })
        .then((response) => {
          setAuthToken(response.data.result.data.accessToken);
          setCookie('authToken', response.data.result.data.accessToken, {
            path: '/',
          });
          setIdValid(true);
          setPwValid(true);
          window.alert(`${userInfo.username}님 환영합니다!`);
          if (getCookie('authToken')) goMain();
        })
        .catch((error) => {
          if (
            error.response.data.result.msg === '존재하지 않는 아이디입니다.'
          ) {
            window.alert('아이디 입력오류');
            setIdValid(false);
          }
          if (
            error.response.data.result.msg === '존재하지 않는 비밀번호입니다.'
          ) {
            window.alert('비밀번호 입력오류');
            setIdValid(true); // 애초에 아이디가 틀렸다면, 비밀번호 에러 메시지까지 오지도 못함
            setPwValid(false);
          }
        });
    } else {
      alert('아이디와 비밀번호를 모두 입력해주세요');
    }
  };
  return (
    <>
      <Container>
        <SignHeader> 로그인</SignHeader>
        <InputContainer>
          <InputFormBox id>
            <InputForm
              text="아이디"
              isValid={idValid}
              placeText="예) MJUyogoyogu"
              data={userInfo}
              event={setUserInfo}
            />
          </InputFormBox>{' '}
          <InputFormBox pw>
            <InputForm
              text="비밀번호"
              isValid={pwValid}
              placeText="예) MJU12345678"
              data={userInfo}
              event={setUserInfo}
            />
          </InputFormBox>{' '}
          <LoginButton login onClick={login}>
            <ButtonText>로그인하기</ButtonText>
          </LoginButton>
          <QuestionText onClick={goSignUP}>
            아직 회원이 아니신가요?
          </QuestionText>
        </InputContainer>
        <LogoImage src={backgroundImage} alt="dd" />
      </Container>
      <EmptyDiv />
    </>
  );
}

export default LoginPage;

function InputForm({ text, isValid, placeText, data, event }) {
  return (
    <>
      <Text>{text}</Text>
      {text === '아이디' ? (
        <InputBox
          placeholder={placeText}
          value={data.username || ''}
          onChange={(e) => {
            event({
              ...data,
              username: e.target.value,
            });
          }}
        />
      ) : (
        <InputBox
          placeholder={placeText}
          type="password"
          value={data.password || ''}
          onChange={(e) => {
            event({
              ...data,
              password: e.target.value,
            });
          }}
        />
      )}

      {isValid ? (
        <EmptyBlock />
      ) : (
        <AlertText>존재하지 않는 {text}입니다</AlertText>
      )}
    </>
  );
}
export const LogoImage = styled.img`
  width: 128px;
  height: 130px;
  position: absolute;
  bottom: 12%;
  right: 9%;
  -webkit-user-drag: none;
`;

const EmptyBlock = styled.div`
  height: 20px;
`;
const EmptyDiv = styled.div`
  height: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
  height: 720px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 69px auto 55px auto;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const SignHeader = styled.p`
  color: black;
  display: flex;
  width: 100%;
  font-size: 35px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  margin-top: 51px;
  user-select: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto 0px auto;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  user-select: none;
`;

export const Text = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin-left: 13px;
`;

export const AlertText = styled(Text)`
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.blue};
`;

const QuestionText = styled(AlertText)`
  color: #b5b5b5;
  font-weight: 800;
  margin-top: 25px;
  margin-bottom: 82px;
  user-select: none;

  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
export const InputBox = styled.input`
  border: 0 solid black;
  width: 100%;
  height: 62px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  ::placeholder {
    font-size: 23px;
    font-weight: 700;
    color: #b5b5b5;
  }
  font-size: 23px;
  font-weight: 700;
  color: #b5b5b5;
  padding-left: 19px;
  box-sizing: border-box;
  margin-bottom: 19px;
  margin-top: 14px;
`;
export const LoginButton = styled.div`
  display: flex;
  width: 43%;
  height: 60px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 66px auto 0px auto;
  user-select: none;

  &:hover {
    background-color: ${(props) => (props.login ? '#012868' : '#b5b5b5')};
  }
  background-color: ${({ isChecked }) => (isChecked ? '#012868' : '#b5b5b5')};
  cursor: pointer;
`;
export const ButtonText = styled(Text)`
  color: #ffffff;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  margin-left: 0px;
  user-select: none;
`;

export const InputFormBox = styled.div`
  margin-top: ${(props) => (props.pw ? '27px' : '47px')};
  width: 73%;
  // height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
