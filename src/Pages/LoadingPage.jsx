import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assests/mjuLogo.svg';

function LoadingPage() {
  return (
    <LoadingBg>
      <LogoContainer>
        <LogoStyle />
        <LoadingTitle>요고 요구</LoadingTitle>
      </LogoContainer>
    </LoadingBg>
  );
}

const LoadingBg = styled.div`
  width: 1440px;
  height: 1024px;
  background-color: #fff;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
`;

const LogoStyle = styled(Logo)`
  animation: mjulogo 10s linear infinite;

  @keyframes mjulogo {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingTitle = styled.p`
  margin-top: 42px;
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
`;

export default LoadingPage;
