import React from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';

const Main = () => {

    return (
        <MainWrapper>
          <ScoreBoard />
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
  
`

export default Main;