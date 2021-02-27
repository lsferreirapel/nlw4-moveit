import { InfoSection } from '../styles/pages/StyledHome';
import { GetServerSideProps } from 'next';

import Head from 'next/head';

import ChallengesProvider from '../contexts/ChallengesContext';
import CountdownProvider from '../contexts/CountdownContext';

import Container from '../styles/global/Container';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({ level, currentExperience, challengesCompleted } : HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
