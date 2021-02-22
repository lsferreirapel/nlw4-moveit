import React from 'react';
import { Container, Bar } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <Bar value={50}>
        <div className="experience"/>
        <span className="experience-label">400 xp</span>
      </Bar>
      <span>800 xp</span>

    </Container>
  );
}

export default ExperienceBar;