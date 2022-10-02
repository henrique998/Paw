import { motion } from "framer-motion"
import styled from "styled-components"

export const SidebarContainer = styled(motion.aside)`
    display: none;

    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 150;

    background-color: ${props => props.theme["base-card-bg"]};
    width: 100%;

    @media (max-width: 414px) {
        display: block;
    }
`

export const SidebarHeader = styled.header`
    height: 4.375rem;

    padding-right: 1.125rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${props => props.theme["base-border"]};
`

export const CloseButton = styled.button`
    svg {
        color: ${props => props.theme["base-text-3"]};
    }
`

export const SidebarNav = styled.nav`
    max-width: 16.5rem;

    margin-top: 6.25rem;
    margin-left: auto;
    margin-right: auto;

    width: 100%;

    ul {
        display: grid;
        gap: 2rem;

        li {
            a {
                font-size: 1.25rem;
            }
        }
    }
`

export const ButtonsContainer = styled.div`
    max-width: 16.5rem;
    width: 100%;

    margin-top: 12.5rem;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    gap: 1.25rem;

    button {
        height: 3.75rem;
    }
`

export const AvatarContainer = styled.div`
    max-width: 16.5rem;

    margin-top: 6.25rem;
    margin-left: auto;
    margin-right: auto;

    img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid ${props => props.theme["base-brand"]};
    }
`