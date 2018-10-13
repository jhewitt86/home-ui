import styled, { keyframes, css } from "styled-components";

const screenAnimation = keyframes`
    0% {
        opacity: 0;
    }
    35% {
      opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Panel = styled.div`
  min-height: 85vh;
  ${props =>
    props.background &&
    css`
      background-color: ${props.theme.colors[props.background]};
    `};
  ${props =>
    props.fixed &&
    css`
      position: absolute;
      top: 60px;
      right: 0;
      bottom: 0;
      left: 0;
    `};
  ${props =>
    props.middle &&
    css`
      display: flex;
      align-items: center;
    `} ${props =>
    props.photo &&
    css`
      &:before {
        content: "";
        animation: ${screenAnimation} 2s;
        background-image: url(https://source.unsplash.com/featured/?nature);
        background-size: cover;
        background-position: 50% 50%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
      }
    `};
`;

export default Panel;
