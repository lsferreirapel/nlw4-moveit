import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import {
  ChallengeBoxContainer,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeFailedButton,
  ChallengeSucceededButton
} from '../styles/components/StyledChallengeBox';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeFails() {
    resetChallenge();
    resetCountdown();
  }
  function handleChallengeSuccess() {
    completeChallenge();
    resetCountdown();
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
              <ChallengeFailedButton
                type="button"
                onClick={handleChallengeFails}
              >Falhei</ChallengeFailedButton>

              <ChallengeSucceededButton
                type="button"
                onClick={handleChallengeSuccess}
              >Completei</ChallengeSucceededButton>
            </footer>
          </ChallengeActive>
        ) : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up"/>
              Avance de level completando desafios.
            </p>
          </ChallengeNotActive>
        )
      }
    </ChallengeBoxContainer>
  );
}

export default ChallengeBox;
