import React from 'react';
import styled from 'styled-components';
import logoCup from '../images/uefachampionsleaguecup.png';

const Card = (props) => {
  const{ card: { src, name, won }, handleCardClick } = props;

  return (
    <CardWrapper onClick={handleCardClick.bind(this, name)}>
      <Image src={src} alt={name}/>
      <Name>{name}</Name>
      <TitleDiv>
        <CupLogo src={logoCup} alt="cup-logo"/>
        {won > 1
        ? <TitleText>x {won} times win</TitleText>
        : <TitleText>x {won} time win</TitleText>
        }
      </TitleDiv>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform 0.3s;
  cursor: pointer;
  opacity: 0.9;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  padding: 0.5rem;
  width: 80%;
  height: auto;
`;

const Name = styled.p`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  gap: 2px;
    
`;

const CupLogo = styled.img`
  width: 1rem;
  height: auto;
  margin-bottom: 2px;
`;

const TitleText = styled.p`
  font-size: 1rem;
`;

export default Card;