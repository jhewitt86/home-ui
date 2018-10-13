import styled, { css } from "styled-components";

export const Header = styled.header`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow.xs};
  position: relative;
  z-index: 1;
  ${props =>
    props.loggedOut &&
    css`
      background-color: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.primary};
    `};
`;

export const LogoContainer = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.md};
  color: inherit;
  font-family: ${props => props.theme.font.family.logo};
  font-size: ${props => props.theme.font.size.xxl};
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: ${props => props.theme.window.maxWidth};
  margin: auto;
`;
