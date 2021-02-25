import { useContext } from 'react';
import  { CountdownContext } from '../contexts/CountdownContext';
import {
  CountdownContainer,
  Timer,
  Minutes,
  Seconds,
  CountdownButton,
  CountdownButtonActive
} from '../styles/components/StyledCountdown';

const Countdown = () => {
  const { minutes,
          seconds,
          hasFinished,
          isActive,
          handleResetCountdown,
          handleStartCountdown,
        } = useContext(CountdownContext)


  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


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
