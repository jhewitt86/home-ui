import styled, { css } from "styled-components";

export const FieldWrap = styled.div`
  padding: ${props => props.theme.spacing.md} 0;
  position: relative;
  ${props =>
    props.noPadding &&
    css`
      padding: 0;
    `};
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  padding: 0 ${props => props.theme.spacing.md};
  opacity: 0.5;
`;

export const SubmitIconWrap = styled(IconWrap)`
  position: static;
  opacity: 1;
`;

export const InputField = styled.input`
  appearance: none;
  background-color: transparent;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.sm}
    ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.primary};
  border: none;
  border-bottom: 1px solid transparent;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font-family: ${props => props.theme.font.family.default};
  font-size: ${props => props.theme.font.size.lg};
  font-weight: ${props => props.theme.font.weight.normal};
  transition: ${props => props.theme.animation.default};
  &&:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  ${props =>
    props.error &&
    css`
      border-color: ${props => props.theme.colors.notify};
    `};
`;

export const TextareaField = InputField.withComponent("textarea").extend`
    border-bottom: none;
    border-top: 1px solid transparent;
    padding: ${props => props.theme.spacing.sm};
    height: 10em;
    resize: none;
`;

export const SubmitButton = styled.button`
  appearance: none;
  padding: ${props => props.theme.spacing.md};
  box-sizing: border-box;
  border: 1px solid transparent;
  outline: none;
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.font.family.default};
  font-size: ${props => props.theme.font.size.sm};
  font-weight: ${props => props.theme.font.weight.medium};
  transition: ${props => props.theme.animation.default};
  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
  &:focus {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;
