import styled from "styled-components";

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

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    height: 2.625rem;

    @media (max-width: 414px) {
        display: none;
    }
`

export const ToggleButtonContainer = styled.button`
    display: none;

    @media (max-width: 414px) {
        display: block;
    }
`