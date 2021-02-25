import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  seconds: number,
  minutes: number,
  isActive: boolean,
  hasFinished: boolean,
  handleResetCountdown(): void,
  handleStartCountdown(): void
}

export const CountdownContext = createContext({} as CountdownContextData)

interface CountdownProviderProps {
  children: ReactNode,
}

let countdownTimeout: NodeJS.Timeout;
const CountdownProvider = ({children}: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished]= useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

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
    <CountdownContext.Provider value={{
      seconds,
      minutes,
      isActive,
      hasFinished,
      handleResetCountdown,
      handleStartCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  );
}
export default CountdownProvider;
