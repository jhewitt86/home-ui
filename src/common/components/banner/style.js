import styled from "styled-components";

export const AppBanner = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  color: ${props => props.theme.colors.primary_dark};
  background-color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.font.size.md};
  font-weight: ${props => props.theme.font.weight.medium};
  box-shadow: ${props => props.theme.shadow.xs};
`;
