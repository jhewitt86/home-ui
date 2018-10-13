import styled, { css } from "styled-components";

export const MapItem = styled.div`
  list-style: none;
  position: relative;
  grid-area: auto / span ${props => props.size || 1};
  height: 0;
  padding-bottom: 100%;
`;

export const ItemBubble = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  overflow: hidden;
  border: 3px solid #fff;
  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-size: cover;
      background-position: 50%;
      align-items: flex-end;
    `};
`;

export const AlertBubble = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  color: inherit;
  display: inline-block;
  background-color: ${props => props.theme.colors.notify};
  border-radius: 100%;
  border: 2px solid ${props => props.theme.colors.white};
`;

export const ItemLabel = styled.div`
  position: absolute;
  top: 104%;
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.font.size.sm};
  ${props =>
    props.alerts &&
    css`
      font-weight: ${props => props.theme.font.weight.medium};
    `};
`;
