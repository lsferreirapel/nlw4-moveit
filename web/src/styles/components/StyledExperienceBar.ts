import styled from 'styled-components';

export const Container = styled.header`
 display: flex;
 align-items: center;
 & > span {
  font-size: 1rem;
 }
`;

interface ExperienceProps {
  value: number;
}
export const Bar = styled.div<ExperienceProps>`
  position: relative;
  flex: 1;
  height: 4px;
  border-radius:4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  .experience {
    height: 4px;
    border-radius:4px;
    width: ${props => props.value}%;
    background: var(--green);
  }
  .experience-label {
    position: absolute;
    top: 12px;
    left: ${props => props.value}%;
    transform: translateX(-50%);
  }
`;