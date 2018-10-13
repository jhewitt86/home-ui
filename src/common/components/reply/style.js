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
  border-radius: ${props => props.theme.spacing.xs};
  box-shadow: ${props => props.theme.shadow.sm};
`;

export const MessageElement = styled.div`
  padding: ${props => props.theme.spacing.md};
  &:first-child {
    padding-bottom: 0;
  }
  &:nth-child(2) {
    padding-top: 0;
  }
`;
export const MessageToolbar = styled.div`
  align-items: flex-end;
  flex-direction: column;
  display: flex;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
`;

export const MessageContent = styled.div`
  font-size: ${props => props.theme.font.size.sm};
  font-weight: ${props => props.theme.font.weight.regular};
`;

export const InlineButton = styled.button`
  font-size: ${props => props.theme.font.size.xs};
  font-weight: ${props => props.theme.font.weight.bold};
  padding: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.link};
  background-color: transparent;
  border: none;
  appearance: none;
  outline: none;
  &:focus {
    color: ${props => props.theme.colors.black};
  }
  &:hover {
    color: ${props => props.theme.colors.black};
  }
`;
