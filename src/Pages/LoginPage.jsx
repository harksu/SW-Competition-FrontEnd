import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authToken } from '../Atoms/atom';
import backgroundImage from '../assests/logo.png';

function LoginPage() {
  const [idValid, setIdValid] = useState(true);
  const [pwValid, setPwValid] = useState(true);
  const [userInfo, setUserInfo] = useState({
    password: '',
    username: '',
  });
  const setAuthToken = useSetRecoilState(authToken);
  const option = {
    loginUrl: 'http://13.125.85.216:8080/api/sign-in?',
  };
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
      axios({
        method: 'post',
        url: option.loginUrl,
        data: {
          ...userInfo,
        },
      })
        .then((response) => {
          console.log(response);
          setAuthToken(response.data.result.data.accessToken);
          setIdValid(true);
          setPwValid(true);
          window.alert(`${userInfo.username}님 환영합니다!`);
          goMain();
        })
        .catch((error) => {
          console.log(error);
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
        <QuestionText onClick={goSignUP}>아직 회원이 아니신가요?</QuestionText>
        <LoginButton onClick={login}>
          <ButtonText>로그인하기</ButtonText>
        </LoginButton>
      </InputContainer>
    </Container>
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

const EmptyBlock = styled.div`
  height: 31px; //입력값 없을 때 스타일 깨지는거 방지용
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%; //피그마 기준 계산값입니다 58% -> 840px 수정? 이거 확실하게 수정 한번 해야 될 듯
  height: 720px; //피그마 기준 계산값입니다 70% -> 720px 수정 +++ 오버레이 수정
  background-color: ${({ theme }) => theme.colors.white};
  margin: 69px auto 55px auto;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: bottom;
  //background-color: pink;
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
  justify-content: space-between;
  align-items: center;
  width: 65%;
  //height: 78%; //이거 나중에 내가 이해한게 맞는건지 여쭤보기
  //background-color: pink;
  margin-bottom: 33px;
`;

export const Text = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin-left: 13px;
`;

export const AlertText = styled(Text)`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.blue};
`;

const QuestionText = styled(AlertText)`
  color: #b5b5b5;
  font-weight: 800;
  font-size: 22px;
  margin-top: 40px;
  margin-bottom: 12px;
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
  //background-color: pink;
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
  background-color: #b5b5b5;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;
export const ButtonText = styled(Text)`
  color: #ffffff;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const InputFormBox = styled.div`
  margin-top: ${(props) => (props.pw ? '70px' : '27px')};
  width: 73%;
  // height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
