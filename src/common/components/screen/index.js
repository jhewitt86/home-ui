import styled, { keyframes, css } from "styled-components";

const windowAnimation = keyframes`
    from {
        transform: translate3d(0,1em,0);
        opacity: 0.75;
    }

    to {
        transform: translate3d(0,0em,0);
        opacity: 1;
    }
`;

const Screen = styled.div`
  animation: ${windowAnimation} ${props => props.theme.animation.default};
  ${props =>
    props.noAnimation &&
    css`
      animation: initial;
    `};
`;

export default Screen;
