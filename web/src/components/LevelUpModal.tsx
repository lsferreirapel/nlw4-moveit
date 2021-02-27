import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Overlay, Container } from '../styles/components/StyledLevelUpModal';

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close button"/>
        </button>
      </Container>
    </Overlay>
  )
}

export default LevelUpModal;
