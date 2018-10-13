import styled, { css } from "styled-components";

export const FlexibleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cells}, 1fr);
  ${props =>
    props.middle &&
    css`
      align-items: center;
    `};
  ${props =>
    props.end &&
    css`
      align-items: end;
    `};
  ${props =>
    props.gap &&
    css`
      grid-gap: ${props.theme.spacing[props.gap]};
    `};
  ${props =>
    props.template &&
    css`
      grid-template-columns: ${props.template};
    `};
  ${props =>
    props.inline &&
    css`
      display: inline-grid;
      margin: auto;
    `};
`;
