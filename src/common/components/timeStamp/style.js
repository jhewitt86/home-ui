import styled from "styled-components";
import Moment from "react-moment";

export const TimeDetail = styled(Moment)`
  font-size: ${props => props.theme.font.size.xs};
  font-weight: ${props => props.theme.font.weight.medium};
  opacity: 0.5;
`;

export const UserName = styled.div`
  font-weight: ${props => props.theme.font.weight.medium};
  font-size: ${props => props.theme.font.size.xs};
  color: ${props => props.theme.colors.primary};
  padding: 0 0 ${props => props.theme.spacing.md} 0;
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
