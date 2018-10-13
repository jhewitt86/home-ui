import styled from "styled-components";

export const ListedReply = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ReplySpacer = styled.div`
  padding: ${props => props.theme.spacing.md} 0;
`;

export const ReplyBubble = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.spacing.xs};
  box-shadow: ${props => props.theme.shadow.sm};
`;

export const MessageContent = styled.div`
  font-size: ${props => props.theme.font.size.sm};
  font-weight: ${props => props.theme.font.weight.light};
`;
