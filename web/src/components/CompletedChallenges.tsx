import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CompletedChallengesContainer } from '../styles/components/StyledCompletedChallenges';

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  );
}

export default CompletedChallenges;
