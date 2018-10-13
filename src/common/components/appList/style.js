import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

const jiggle = keyframes`
  0% {
    transform: translate3d(0,0,0) rotate(0deg) scale(1);
  }
  40% {
    transform: translate3d(0,0,0) rotate(0deg) scale(1);
  }
  42% {
    transform: translate3d(0,0,0) rotate(1deg) scale(1);
  }
  44% {
    transform: translate3d(0,0,0) rotate(-1deg) scale(1);
  }
  46% {
    transform: translate3d(0,0,0) rotate(2deg) scale(1);
  }
  48% {
    transform: translate3d(0,0,0) rotate(-2deg) scale(1);
  }
  50% {
    transform: translate3d(0,0,0) rotate(1deg) scale(1);
  }
  52% {
    transform: translate3d(0,0,0) rotate(-1deg) scale(1);
  }
  56% {
    transform: translate3d(0,0,0) rotate(0deg) scale(1);
  }
  100% {
    transform: translate3d(0,0,0) rotate(0deg) scale(1);
  }
`;

export const ListedApp = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const AppButton = styled(Link)`
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  appearance: none;
  padding: 0;
  width: 100%;
  border: 1px solid transparent;
  color: ${props => props.theme.colors.backdrop};
  cursor: pointer;
  outline: none;
  text-decoration: none;
  display: block;
  text-align: center;
  &&:hover {
    background-color: ${props => props.theme.colors.highlight};
  }
  &&:focus {
    border-color: ${props => props.theme.colors.notify};
  }
  transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  ${props =>
    props.jiggle &&
    css`
      animation: ${jiggle} 4s infinite;
    `};
`;
export const AppButtonWrap = styled.div`
  display: block;
`;
export const AppButtonIcon = styled.div``;
export const AppButtonLabel = styled.div`
  font-size: ${props => props.theme.font.size.sm};
`;
