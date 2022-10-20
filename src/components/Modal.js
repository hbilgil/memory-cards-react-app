import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {

    const { message, resetGame, currentScore } = props;

    return (
        <ModalContainer>
          <ModalWrapper>
            <ModalMessage size="36px" margin="10px auto">
            {message}
            </ModalMessage>
            <ModalMessage size="24px" margin="4px auto 8px auto">
                Final Score: {currentScore}
            </ModalMessage>
            <ModalBtn onClick={resetGame}>
                Play again
            </ModalBtn>
          </ModalWrapper>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  width: 25vw;
  background-color: rgb(219, 219, 219);
  border-radius: 10px;
  border: solid 4px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (max-width: 600px) {
    width: 40vw;
    height: auto;
  }
`;

const ModalMessage = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
`;

const ModalBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.modalBtn};
  font-family: "Antonio", sans-serif;
  margin: ${(props) => props.margin};
  font-size: 20px;
  border: none;
  border-radius: 3px;
  padding: 7px 12px 8px 12px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  width: 130px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.modalBtnHover};
  }
  @media (max-width: 600px) {
    width: 15rem;
  }
`;

export default Modal;