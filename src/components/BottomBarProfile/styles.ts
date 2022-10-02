import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const BottomProfileContainer = styled(Dialog.Content)`
    position: absolute;

    bottom: 5rem;
    right: 3rem;
    z-index: 100;

    width: 8.25rem;
    padding: 0.875rem 0.75rem;
    border-radius: 8px;
    box-shadow: ${props => props.theme["base-shadow-1"]};
    background-color: ${props => props.theme["base-card-bg"]};
    
    display: grid;
    justify-content: center;
    gap: 0.5rem;
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