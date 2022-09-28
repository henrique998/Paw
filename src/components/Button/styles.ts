import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant: 'purple' | 'white'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 100%;
  padding: 0 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;

  ${props => props.variant === 'purple' && css`
    background-color: ${props.theme["base-brand"]};
    color: ${props.theme.white};

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}

  ${props => props.variant === 'white' && css`
    background-color: ${props.theme.white};
    color: ${props.theme["base-brand"]};
    border: 1px solid ${props.theme["base-border"]};

    transition: border-color .2s;

    &:hover {
      border-color: ${props.theme["base-brand"]};
    }
  `}
` 