import styled, { keyframes, css } from "styled-components";

const loaderColors = [
  "#EF341F",
  "#ECC30B",
  "#52B5EA",
  "#DB52EA",
  "#BCEA52",
  "#07F2CF",
  "#0F07F2"
];

const CircleColourCycle = keyframes`
    0% {
        background-color: ${loaderColors[0]};
    }
    20% {
        background-color: ${loaderColors[1]};
    }
    40% {
        background-color: ${loaderColors[2]};
    }
    50% {
        background-color: ${loaderColors[3]};
    }
    60% {
        background-color: ${loaderColors[3]};
    }
    70% {
        background-color: ${loaderColors[4]};
    }
    80% {
        background-color: ${loaderColors[5]};
    }
    90% {
        background-color: ${loaderColors[6]};
    }
    100% {
        background-color: ${loaderColors[0]};
    }
`;

const AnimationFrames = keyframes`{
    0% {
        transform: translate3d(0,100%,0);
        opacity: 0;
    }
    50% {
        transform: translate3d(0,0%,0);
        opacity: .5;
    }
    100% {
        transform: translate3d(0,-100%,0);
        opacity: 0;
    }
}`;

export const LoadingContainer = styled.div`
  ${props =>
    props.withContainer &&
    css`
      background-color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;

export const LoadingCircle = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 100%;
  overflow: hidden;
  position: relative;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  animation: 2s ${CircleColourCycle} infinite;
`;

export const CircleInner = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translate3d(0, 100%, 0);
  ${props =>
    props.count &&
    css`
      background-color: ${loaderColors[props.count - 1]};
      animation: ${props.count * 0.25}s ${AnimationFrames} infinite;
      animation-delay: ${props.count / 3}s;
    `};
`;
