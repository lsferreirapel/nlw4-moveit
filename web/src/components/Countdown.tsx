import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import {CountdownContainer, Timer,  Minutes, Seconds, CountdownButton, CountdownButtonActive} from '../styles/components/StyledCountdown';

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished]= useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function handleStartCountdown() {
    setIsActive(true);
  }

  function handleResetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }

  }, [isActive, time])

  return (
    <CountdownContainer>
      <Timer>
        <Minutes>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </Minutes>
        <span>:</span>
        <Seconds>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </Seconds>
      </Timer>

      { hasFinished ? (<CountdownButton disabled>Ciclo encerrado</CountdownButton>) : (
        <>
          { isActive ? (
            <CountdownButtonActive
              type="button"
              onClick={handleResetCountdown}
            >Abandonar ciclo</CountdownButtonActive>
          ) : (
            <CountdownButton
              type="button"
              onClick={handleStartCountdown}
            >Iniciar ciclo</CountdownButton>
          ) }
        </>
      )}


    </CountdownContainer>
  );
}

export default Countdown;
