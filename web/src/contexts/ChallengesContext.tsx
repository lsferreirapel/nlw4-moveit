import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface ChallengesContextData {
  level: Number,
  currentExperience: Number,
  challengesCompleted: Number,
  activeChallenge: {
    type: 'body' | 'eye';
    description: string;
    amount: number;
  },
  levelUp(): void,
  startNewChallenge(): void,
  resetChallenge(): void,
}

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}
const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setchallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);



  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }
  function resetChallenge() {
    setActiveChallenge(null);
  }


  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}

export default ChallengesProvider;
