import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface ChallengesContextData {
  level: number,
  currentExperience: number,
  experienceToNextLevel: number,
  challengesCompleted: number,
  activeChallenge: {
    type: 'body' | 'eye';
    description: string;
    amount: number;
  },
  levelUp(): void,
  startNewChallenge(): void,
  resetChallenge(): void,
  completeChallenge(): void,
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

  const experienceToNextLevel = Math.pow((level + 1) * 3, 2);


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
  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      levelUp();
      finalExperience -= experienceToNextLevel;
    }

    setCurrentExperience(finalExperience);
    resetChallenge();
    setchallengesCompleted(challengesCompleted + 1);
  }


  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}

export default ChallengesProvider;
