import React from 'react';
import styled from 'styled-components';
import logoUefa from '../images/uefa-champions-league-seeklogo.com.svg'
import logoCup from '../images/uefachampionsleaguecup.png';

const Header = () => {
    return (
      <>
        <HeaderContainer>
          <Logo src={logoUefa} alt="uefa-logo"></Logo>
          <HeaderWrapper>
            <HeaderText size="4rem" family="'Train One', cursive">MEMORY GAME</HeaderText>
            <HeaderText size="3rem" family="'Quintessential', cursive">for Champions</HeaderText>
          </HeaderWrapper>
          <Logo src={logoCup} alt="cup-logo"></Logo>
        </HeaderContainer>
      </>
    )
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightHeader};
  opacity: 0.9;
`

const Logo = styled.img`
  width: 10rem;
  height: auto;
  @media (max-width: 600px) {
    width: 6rem;
    height: auto;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.h1`
    font-size: ${(props) => props.size};
    font-family: ${(props) => props.family};
    @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export default Header;