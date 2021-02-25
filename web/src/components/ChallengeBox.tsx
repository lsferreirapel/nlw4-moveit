import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive, ChallengeFailedButton, ChallengeSucceededButton } from '../styles/components/StyledChallengeBox';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  function handleChallengeFails() {
    resetChallenge();
  }

  return (
    <ChallengeBoxContainer>
      {
        activeChallenge ? (
          <ChallengeActive>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type}/>
              <strong>Novo Desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <ChallengeFailedButton type="button" onClick={handleChallengeFails}>Falhei</ChallengeFailedButton>
              <ChallengeSucceededButton type="button">Completei</ChallengeSucceededButton>
            </footer>
          </ChallengeActive>
        ) : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Lever Up"/>
              Avance de level completando desafios.
            </p>
          </ChallengeNotActive>
        )
      }
    </ChallengeBoxContainer>
  );
}

export default ChallengeBox;
