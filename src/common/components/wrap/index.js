import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${props => props.theme.window.maxWidth};
  margin: auto;
`;

export default Wrap;
