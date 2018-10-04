import styled, { keyframes } from "styled-components";

const AddNewAnimation = keyframes`
    0% {
        transform: translate3d(0,0,0) rotate(-45deg) scale(.5);
        opacity: 0;
    }
    60% {
        transform: translate3d(0,0em,0) rotate(15deg) scale(1.1);
        opacity: 1;
    }
    100% {
        transform: translate3d(0,0em,0) rotate(0deg) scale(1);
        opacity: 1;
    }
`;

export const AddNewWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: ${props => props.theme.spacing.lg};
  animation: ${AddNewAnimation} ${props => props.theme.animation.long};
`;

export const AddNewButton = styled.div`
  border-radius: 100%;
  border: 1px solid transparent;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadow.sm};
`;
