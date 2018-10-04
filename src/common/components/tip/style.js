import styled from "styled-components";

export const TipWrapper = styled.div`
  box-shadow: ${props => props.theme.shadow.xs};
  position: relative;
`;

export const TipContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.charcoal};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.font.size.sm};
  font-weight: ${props => props.theme.font.weight.medium};
  display: grid;
  grid-template-columns: 1.8em auto;
  grid-column-gap: ${props => props.theme.spacing.sm};
`;
