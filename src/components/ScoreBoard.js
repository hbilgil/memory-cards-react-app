import React from 'react';
import styled from 'styled-components';

const ScoreBoard = (props) => {
  const { currentScore, bestScore } = props;

  return (
    <ScoreboardWrapper>
      <Score backgroundColor="#ffb5b5">Current score: {currentScore}</Score>
      <Score backgroundColor="#b5ffb5">Best score: {bestScore}</Score>
    </ScoreboardWrapper>
  )
}

const ScoreboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 69rem;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 250px;
    gap: 3rem;
  }
`;

const Score = styled.div`
  padding: 0.5rem;
  width: 30%;
  font-size: 2rem;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default ScoreBoard;