import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [isLogin] = useState(false);
  return (
    <HeaderWrapper>
      <ItemBox> </ItemBox>
      <ItemBox>
        <Title>요고 요구</Title>
      </ItemBox>
      <ItemBox>
        <UserSelect>
          <SelectBtn isLogin={isLogin}>로그인</SelectBtn>
          <SelectBtn>회원가입</SelectBtn>
        </UserSelect>
      </ItemBox>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
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
    display: ${(props) => !props && 'none'};
  }
`;
