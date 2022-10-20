import React from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import Cards from './Cards';

const Main = (props) => {
  const { currentScore, bestScore, handleCardClick } = props;

  return (
    <MainWrapper>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <Cards 
        handleCardClick={handleCardClick}
        currentScore={currentScore}
        bestScore={bestScore}
      />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
`;

export default Main;