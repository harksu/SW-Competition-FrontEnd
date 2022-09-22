import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../assests/githubIcon.svg';

function Footer() {
  return (
    <FooterWrapper>
      <TeamName>소나기</TeamName>
      <GithubLogo />
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  align-items: center;
`;
const TeamName = styled.p`
  font-family: 'locus_sangsang';
  position: absolute;
  left: 30px;
`;
const GithubLogo = styled(GithubIcon)`
  position: absolute;
  right: 40px;
`;
