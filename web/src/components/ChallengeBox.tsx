import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive, ChallengeFailedButton, ChallengeSucceededButton } from '../styles/components/StyledChallengeBox';

const ChallengeBox = () => {
  const hasActiveChallenge = true;

  return (
    <ChallengeBoxContainer>
      {
        hasActiveChallenge ? (
          <ChallengeActive>
            <header>Ganhe 400 xp</header>

            <main>
              <img src="icons/body.svg" alt="Strong"/>
              <strong>Novo Desafio</strong>
              <p>Levante e faça uma caminhada de 3 minutos.</p>
            </main>

            <footer>
              <ChallengeFailedButton type="button">Falhei</ChallengeFailedButton>
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
