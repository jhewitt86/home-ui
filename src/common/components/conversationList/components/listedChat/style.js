import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ChatList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
`;

export const ChatLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
`;

export const ListedChat = styled.li`
  border-bottom: 1px solid ${props => props.theme.colors.highlight};
  margin: 0;
  padding: 0 ${props => props.theme.spacing.md};
  list-style: none;
  background-color: ${props => props.theme.colors.white};
  position: relative;
  ${props =>
    !props.public &&
    css`
      background-color: ${props => props.theme.colors.unlocked};
    `};
`;

export const ChatLabel = styled.div`
  font-size: ${props => props.theme.font.size.sm};
  font-weight: ${props => props.theme.font.weight.medium};
`;

export const ChatSummary = styled.div`
  font-size: ${props => props.theme.font.size.sm};
  padding: ${props => props.theme.spacing.sm} 0;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.3em;
  position: relative;
`;

export const ChatOverlay = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0) 20%, #fff 90%);
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 3em;
`;

export const ChatDetail = styled.div`
  display: grid;
  grid-template-columns: 1.5em auto;
  align-items: center;
  opacity: 0.5;
  padding: ${props => props.theme.spacing.sm} 0;
  font-size: ${props => props.theme.font.size.xs};
  font-weight: ${props => props.theme.font.weight.medium};
  io
`;

export const PrivateDetail = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: ${props => props.theme.colors.green};
  padding: ${props => props.theme.spacing.sm};
`;

export const TriggerDetail = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
`;

export const TimeContainer = styled.div`
  grid-column: span 2;
  align-items: center;
  justify-content: flex-end;
  display: flex;
`;
