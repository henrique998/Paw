import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const ProfileContainer = styled.div`
    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        object-fit: cover;
    }

    @media (max-width: 414px) {
        display: none;
    }
`

export const HeaderProfileBoxContainer = styled(Dialog.Content)`
    position: absolute;

    top: 4rem;
    right: 7rem;
    z-index: 100;

    width: 8.25rem;
    padding: 0.875rem 0.75rem;
    border-radius: 8px;
    box-shadow: ${props => props.theme["base-shadow-1"]};
    background-color: ${props => props.theme["base-card-bg"]};
    
    display: grid;
    justify-content: center;
`

export const LoggoutButton = styled.button`
    height: 2.75rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme["base-border"]};
    padding: 0.625rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${props => props.theme["base-brand"]};

    transition: border-color .2s;

    &:hover {
        border-color: ${props => props.theme["base-brand"]};
    }
`