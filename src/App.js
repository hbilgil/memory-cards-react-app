import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = (props) => {

  const {gameOver, message, resetGame, currentScore } = props;
  return (
    <>
      {gameOver && <Modal message={message} resetGame={resetGame} score={currentScore} />}
      <Header />
      <Main/>
      <Footer />
    </>
  )
}

export default App;