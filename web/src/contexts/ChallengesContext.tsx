import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
  level: Number,
  currentExperience: Number,
  challengesCompleted: Number,
  levelUp: () => void,
  startNewChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}
const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setchallengesCompleted] = useState(0);



  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('New challenge');
  }


  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}

export default ChallengesProvider;
