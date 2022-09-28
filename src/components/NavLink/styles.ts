import styled, { css } from "styled-components";

interface NavLinkContainerProps {
    isActive: boolean
}

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
    a {
        font-size: 0.875rem;
        position: relative;
        color: ${props => props.theme["base-text-1"]};
        transition: color .2s;

        &:hover {
            color: ${props => props.theme["base-brand"]};
        }

        ${props => props.isActive && css`
            color: ${props => props.theme["base-brand"]};
            font-weight: 600;

            &::after {
                content: '';
                height: 2px;
                width: 100%;
                background-color: ${props => props.theme["base-brand"]};
                position: absolute;
                bottom: -26px;
                left: 0;
            }
        `}
    }
`