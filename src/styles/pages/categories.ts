import styled from "styled-components";

export const CategoriesContainer = styled.main`
    height: calc(100% - 4.375rem);
    padding: 1rem;

    section {
        margin-top: 4.375rem;
    
        max-width: 69.875rem;
        margin-left: auto;
        margin-right: auto;
    }
`

export const CategoriesHeading = styled.header`
    max-width: 47.25rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6.25rem;
    
    text-align: center;

    h1 {
        font-size: 3.25rem;
        color: ${props => props.theme["base-title"]};
        font-weight: 700;

        span {
            background: linear-gradient(90deg, #7504FB 63.95%, rgba(117, 4, 251, 0.54) 80.27%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }

    p {
        margin-top: 0.875rem;

        font-size: 1.125rem;
        color: ${props => props.theme["base-text-1"]};
        font-weight: 500;

        max-width: 25.75rem;
        width: 100%;

        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 414px) {
        h1 {
            font-size: 1.75rem;
        }

        p {
            font-size: 1.125rem;
        }
    }
`

export const CategoriesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    @media (max-width: 414px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
`