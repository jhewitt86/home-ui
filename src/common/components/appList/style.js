import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListedApp = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const AppButton = styled(Link)`
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  appearance: none;
  padding: 0;
  width: 100%;
  border: 1px solid transparent;
  color: ${props => props.theme.colors.backdrop};
  cursor: pointer;
  outline: none;
  text-decoration: none;
  display: block;
  text-align: center;
  &&:hover {
    background-color: ${props => props.theme.colors.highlight};
  }
  &&:focus {
    border-color: ${props => props.theme.colors.notify};
  }
`;
export const AppButtonWrap = styled.div`
  display: block;
`;
export const AppButtonIcon = styled.div``;
export const AppButtonLabel = styled.div`
  font-size: ${props => props.theme.font.size.sm};
`;
