import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  margin-left: 1.5rem;
`;

export const Name = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--title);
`;

export const Level = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;

  & > img {
    margin-right: 0.5rem;
  }
`;
