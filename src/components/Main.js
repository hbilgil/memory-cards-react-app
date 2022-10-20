import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import Cards from './Cards';
import Modal from './Modal';

const Main = () => {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [teams, setTeams] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const handleCardClick = (cardName) => {
    if (!teams.includes(cardName)) {
      setTeams((prevArr) => [...prevArr, cardName]);
      setCurrentScore((prevScore) => prevScore + 1);
    } else {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setMessage("🙁 Game Over! 🙁");
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setCurrentScore(0);
    setTeams([]);
  };

  useEffect(() => {
    if (currentScore === 12) {
      setMessage("🎉 You Won! 🎉");
      setGameOver(true);
    }
  }, [currentScore]);

  return (
    <>
    {gameOver && <Modal message={message} resetGame={resetGame} currentScore={currentScore} />}
    <MainWrapper>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <Cards 
        handleCardClick={handleCardClick}
        currentScore={currentScore}
        bestScore={bestScore}
      />
    </MainWrapper>
  </>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  
`

export default Main;