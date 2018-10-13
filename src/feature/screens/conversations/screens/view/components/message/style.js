import styled from "styled-components";

export const MessageWrapper = styled.div`
  box-shadow: ${props => props.theme.shadow.lg};
  background-color: ${props => props.theme.colors.white};
  position: relative;
`;

export const Headline = styled.h1`
  font-size: ${props => props.theme.font.size.md};
  font-weight: ${props => props.theme.font.weight.medium};
  padding: 0 0 ${props => props.theme.spacing.sm} 0;
  margin: 0;
`;

export const MessageText = styled.div`
  padding: ${props => props.theme.spacing.md} 0 0 0;
`;

export const CommentStatus = styled.div`
  font-weight: ${props => props.theme.font.weight.light};
  font-size: ${props => props.theme.font.size.sm};
`;
