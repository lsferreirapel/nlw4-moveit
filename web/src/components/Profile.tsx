import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContainer, Avatar, Name, Level, UserInfo } from '../styles/components/StyledProfile';

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <Avatar src="https://github.com/lsferreirapel.png" alt="Lucas Ferreira"/>
      <UserInfo>
        <Name>Lucas Ferreira</Name>
        <Level>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </Level>
      </UserInfo>
    </ProfileContainer>
  );
}

export default Profile;
