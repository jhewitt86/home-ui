import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LoginFormWrapper = styled.div`
  width: 25em;
  max-width: 85%;
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadow.sm};
  margin: auto;
`;

export const LoginError = styled.div`
  font-weight: ${props => props.theme.font.weight.medium};
  color: ${props => props.theme.colors.notify};
`;

export const Toolbar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.primary};
`;

export const Hyperlink = styled(Link)`
  color: ${props => props.theme.colors.link};
  text-decoration: none;
  font-weight: ${props => props.theme.font.weight.medium};
  ${props =>
    props.block &&
    css`
      display: block;
      text-align: center;
    `};
`;
