/* eslint-disable react/jsx-no-bind */
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../assests/githubIcon.svg';

function Footer() {
  const locationNow = useLocation();
  function goGithub() {
    window.open(
      'https://github.com/harksu/SW-Competition-FrontEnd',
      '_blanck',
      'rel=noopener noreferrer',
    );
  }
  if (locationNow.pathname === '/loading') return null;
  return (
    <FooterWrapper>
      <Container>
        <TeamName>소나기</TeamName>
      </Container>
      <Container>
        <GithubLogo onClick={goGithub} />
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 80px;
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
  font-weight: 400;
`;
const GithubLogo = styled(GithubIcon)``;
