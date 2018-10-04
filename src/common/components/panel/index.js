import styled, { css } from "styled-components";

const Panel = styled.div`
  ${props =>
    props.background &&
    css`
      background-color: ${props.theme.colors[props.background]};
    `};
`;

export default Panel;
