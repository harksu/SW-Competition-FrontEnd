/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate();
  const [isLogin] = useState(false);
  const locationNow = useLocation();
  const [isShow, setIsShow] = useState(true);
  function handleLoginBtn() {
    navigate('/');
  }
  function handleSignunBtn() {
    navigate('/signup');
  }
  if (locationNow.pathname === '/loading') return null;
  useEffect(() => {
    if (locationNow.pathname === '/' || locationNow.pathname === '/signup') {
      setIsShow(false);
    } else {
      setIsShow(true);
    } // 로그인 페이지랑 회원가입 페이지에선 헤더에서 로그인이랑 회원가입 버튼 오면 안되니까 컨디셔닝입니다.
  }, [locationNow.pathname]);

  // ++로그인 상태 관리도 해야될 듯 싶습니당
  return (
    <HeaderWrapper>
      <ItemBox> </ItemBox>
      <ItemBox>
        <Title>요고 요구</Title>
      </ItemBox>
      <ItemBox>
        {isShow && (
          <UserSelect>
            <SelectBtn isLogin={isLogin} onClick={handleLoginBtn}>
              로그인
            </SelectBtn>
            <SelectBtn onClick={handleSignunBtn}>회원가입</SelectBtn>
          </UserSelect>
        )}
      </ItemBox>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const ItemBox = styled.div`
  width: 28%;
`;

const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.white};
`;

const UserSelect = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 15px;
  width: 100%;
`;

const SelectBtn = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  width: 50%;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  &:nth-child(2) {
    margin-left: 8%;
  }
  &:nth-child(1) {
    display: ${(props) => props.isLogin && 'none'};
  }
`;
