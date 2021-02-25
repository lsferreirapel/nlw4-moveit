import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Container, Bar } from '../styles/components/StyledExperienceBar';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <Bar value={percentToNextLevel}>
        <div className="experience"/>
        <span className="experience-label">{currentExperience} xp</span>
      </Bar>
      <span>{experienceToNextLevel} xp</span>

    </Container>
  );
}

export default ExperienceBar;
