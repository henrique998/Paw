import styled from "styled-components"
import * as Dialog from '@radix-ui/react-dialog'

export const BlogHeader = styled.header`
    height: 4.375rem;
    border-bottom: 1px solid ${props => props.theme["base-border"]};
`

export const BlogHeaderContainer = styled.div`
    max-width: 1250px;
    padding: 0 2rem;
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-left {
        display: flex;
        align-items: center;
        gap: 1.625rem;
    }

    .header-right {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            font-size: 1.125rem;
            font-weight: 500;
            color: ${props => props.theme["base-title"]};

            strong {
                font-weight: 700;
                color: ${props => props.theme["base-brand"]};
            }
        }

        img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
        }

        .profile {
            position: relative;
        }
    }

    @media (max-width: 414px) {
        justify-content: center;
        
        .header-right {
            display: none;
        }
    }
`

export const Nav = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media (max-width: 414px) {
        display: none;
    }
`

export const BottomBarMenu = styled.nav`
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;

    display: none;

    background-color: ${props => props.theme["base-bottom-bar-bg"]};
    height: 4.375rem;
    border-top: 1px solid ${props => props.theme["base-border"]};

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 19.25rem;
        margin: 0 auto;

        height: 100%;

        li {
            img {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }

    @media (max-width: 424px) {
        display: block;
    }
`

interface OptionContainerProps {
    isActive: boolean
}

export const OptionContainer = styled.li<OptionContainerProps>`
    svg {
        color: ${props => props.isActive ? props.theme["base-brand"] : props.theme["base-icon-color"]};
    }
`

export const ProfileContainer = styled(Dialog.Content)`
    width: 8.25rem;
    padding: 0.875rem 0.75rem;
    border-radius: 8px;
    box-shadow: ${props => props.theme["base-shadow-1"]};
    background-color: ${props => props.theme["base-card-bg"]};
    
    display: grid;
    justify-content: center;
    gap: 0.5rem;
`

export const HeaderProfileContainer = styled(ProfileContainer)`
    position: absolute;

    top: 4rem;
    right: 7rem;
    z-index: 100;
`

export const BottomProfileContainer = styled(ProfileContainer)`
    position: fixed;

    bottom: 5rem;
    right: 3rem;
    z-index: 100;
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