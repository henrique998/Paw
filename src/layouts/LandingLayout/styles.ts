import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const LandingHeader = styled.header`
    height: 4.375rem;
    border-bottom: 1px solid ${props => props.theme["base-border"]};
` 

export const LandingHeaderContainer = styled.div`
    max-width: 1250px;
    padding: 0 2rem;
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Nav = styled.nav`
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    @media (max-width: 414px) {
        display: none;
    }
`

export const ModalsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    height: 2.625rem;

    @media (max-width: 414px) {
        display: none;
    }
`

interface ButtonProps {
    variant: 'purple' | 'white' 
} 

export const Button = styled.button<ButtonProps>`
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

export const MenuButtonContainer = styled.button`
    display: none;

    @media (max-width: 414px) {
        display: block;
    }
`

export const ModalOverlay = styled(Dialog.Overlay)`
    position: fixed;

    width: 100vw;
    height: 100vh;

    inset: 0;
    z-index: 200;

    background: rgba(0, 0, 0, 0.75);
`

export const ModalContent = styled(Dialog.Content)`
    max-width: 25rem;
    width: 100%;
    height: 31.25rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    padding: 0.75rem 1.5rem 1.5rem 1.5rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            color: ${props => props.theme["base-border"]};

            transition: color .2s;

            &:hover {
                color: ${props => props.theme["base-brand"]};
            }
        }
    }

`

export const ModalTitle = styled(Dialog.Title)`
    margin-top: 3rem;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;

    color: ${props => props.theme["base-title"]};
`

export const ModalDescription = styled(Dialog.Description)`
    margin-top: 0.75rem;

    text-align: center;
    font-size: 0.875rem;

    color: ${props => props.theme["base-text-2"]};
`

export const AvatarContainer = styled.div`
    img {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid ${props => props.theme["base-brand"]};
    }

    @media (max-width: 414px) {
        display: none;
    }
`

export const AuthOptionsContainer = styled.ul`
    margin-top: 2.5rem;

    display: grid;
    gap: 1rem;
`

export const AuthOption = styled.button`
    height: 2.5rem;
    width: 100%;
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 6px;
    background-color: ${props => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    img {
        width: 1.25rem;
        height: 1.25rem;
    }

    span {
        color: ${props => props.theme["base-title"]}; 
        font-size: 0.875rem;
    }

    transition: border-color .2s;

    &:hover {
        border-color: ${props => props.theme["base-brand"]};
    }
`

export const Separator = styled.div`
    margin: 2rem auto;
    position: relative;

    padding: 0 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background-color: ${props => props.theme.white};

    &::before {
        content: "";
        background-color: ${props => props.theme["base-border"]};
        width: 100%;
        height: 1px;
    }

    &::after {
        content: "";
        background-color: ${props => props.theme["base-border"]};
        width: 100%;
        height: 1px;
    }
`