import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = () => {
  return (
    <>
      <Modal />
      <Header />
      <Main/>
      <Footer />
    </>
  )
}

export default App;