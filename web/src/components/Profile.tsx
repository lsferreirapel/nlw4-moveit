import { ProfileContainer, Avatar, Name, Level, UserInfo } from '../styles/components/StyledProfile';

const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar src="https://github.com/lsferreirapel.png" alt="Lucas Ferreira"/>
      <UserInfo>
        <Name>Lucas Ferreira</Name>
        <Level>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </Level>
      </UserInfo>
    </ProfileContainer>
  );
}

export default Profile;