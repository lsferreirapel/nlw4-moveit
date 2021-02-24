import { useState, useEffect } from 'react';
import {CountdownContainer, Timer,  Minutes, Seconds, CountdownButton} from '../styles/components/StyledCountdown';

const Countdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function handleStartCountdown() {
    setIsActive(true);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
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
      <CountdownButton 
        type="button"
        onClick={handleStartCountdown}
      >Iniciar um ciclo</CountdownButton>
    </CountdownContainer>
  );
}

export default Countdown;