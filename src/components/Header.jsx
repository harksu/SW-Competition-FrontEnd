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

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
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
  font-weight: 700;
  font-size: 25px;
`;

const UserSelect = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 15px;
  width: 100%;
`;

// const LoginBtn = styled.p`
//   display: ${(props) => props && 'none'};
//   color: ${theme.colors.white};
//   font-size: 10px;
//   margin-right: 70px;
// `;
// const RegisterBtn = styled.p`
//   color: ${theme.colors.white};
//   font-size: 10px;
// `;

const SelectBtn = styled.button`
  border: none;
  background: none;
  font-size: 10px;
  width: 50%;
  &:nth-child(1) {
    display: ${(props) => !props && 'none'};
    margin-right: 70px;
  }
`;
