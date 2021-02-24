import { InfoSection } from '../styles/pages/StyledHome';

import Container from '../styles/global/Container';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';

import Head from 'next/head';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início - Move.it</title>
      </Head>
      <ExperienceBar />

      <InfoSection>
        <div className="left-container">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div className="right-container">

        </div>

      </InfoSection>

    </Container>
  )
}
