import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = () => {
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
    if (currentScore === 18) {
      setMessage("🎉 You Won! 🎉");
      setBestScore(currentScore);
      setGameOver(true);
    }
  }, [currentScore]);

  return (
    <>
      {gameOver && <Modal message={message} resetGame={resetGame} currentScore={currentScore} />}
      <Header />
      <Main 
        currentScore={currentScore}
        bestScore={bestScore}
        handleCardClick={handleCardClick}
        />
      <Footer />
    </>
  )
}

export default App;