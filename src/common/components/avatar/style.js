import styled, { css } from "styled-components";

export const MapItem = styled.div`
  list-style: none;
  position: relative;
  grid-area: auto / span ${props => props.size || 1};
  height: 0;
  padding-bottom: 100%;
  tranform: translate3d(0, 0, 0);
  backface-visibility: hidden;
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
  overflow: hidden;
  border-weight: 3px;
  border-style: solid;
  border-color rgba(255,255,255,1);
  tranform: translate3d(0,0,0);
  backface-visibility: hidden;
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
