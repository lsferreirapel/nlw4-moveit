import { InfoSection } from '../styles/pages/StyledHome';

import Head from 'next/head';

import CountdownProvider from '../contexts/CountdownContext';

import Container from '../styles/global/Container';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início - Move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <InfoSection>
          <div className="left-container">
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div className="right-container">
            <ChallengeBox />
          </div>

        </InfoSection>
      </CountdownProvider>

    </Container>
  )
}
