import { Container, Bar } from '../styles/styled-components/StyledExperienceBar';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <Bar value={50}>
        <div className="experience"/>
        <span className="experience-label">300 xp</span>
      </Bar>
      <span>600 xp</span>

    </Container>
  );
}

export default ExperienceBar;