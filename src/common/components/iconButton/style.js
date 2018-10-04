import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  appearance: none;
  font-size: ${props => props.theme.font.size.xl};
  background-color: transparent;
  border: none;
  color: inherit;
  padding: 0;
  line-height: 0;
  outline: none;
  cursor: pointer;
`;

export const ButtonLink = Button.withComponent(Link).extend`
`;

export const ButtonWrap = styled.div`
  line-height: 0;
  align-items: center;
  ${props =>
    props.right &&
    css`
      display: flex;
      justify-content: flex-end;
    `};
`;
