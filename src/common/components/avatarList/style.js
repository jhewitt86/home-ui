import styled from "styled-components";

export const AvatarGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${props => props.theme.spacing.xxl}
    ${props => props.theme.spacing.lg};
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
`;
