import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Card from './Card';
import teamsInfo from './Teams';

const Cards = (props) => {
  const { handleCardClick, currentScore, bestScore } = props;

  const [cards, setCards] = useState(teamsInfo);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    const newCards = [...cards];
    shuffleArray(newCards);
    setCards(newCards);
  }, [currentScore, bestScore]);
    
  return (
    <CardsContainer>
      {cards.map((card) => (
      <Card card={card} key={card.name} handleCardClick={handleCardClick} />
      ))}
    </CardsContainer>
  )
}

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Cards;