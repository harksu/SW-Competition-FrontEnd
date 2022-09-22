import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../assests/githubIcon.svg';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <TeamName>소나기</TeamName>
      </Container>
      <Container>
        <GithubLogo />
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 7%;
  display: flex;
  justify-content: center;
`;
const TeamName = styled.p`
  font-family: 'locus_sangsang';
  font-size: 16px;
`;
const GithubLogo = styled(GithubIcon)``;
