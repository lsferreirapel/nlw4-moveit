import { InfoSection } from '../styles/pages/StyledHome';

import Container from '../styles/global/Container';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';

export default function Home() {
  return (
    <Container>
      <ExperienceBar />

      <InfoSection>
        <div className="left-container">
          <Profile />
          <CompletedChallenges />
        </div>

        <div className="right-container">

        </div>

      </InfoSection>

    </Container>
  )
}
