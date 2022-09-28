import styled from "styled-components";

export const AboutContainer = styled.section`
    height: 100%;
    padding: 1rem;
`

export const AboutHeading = styled.header`
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

        max-width: 35.25rem;
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

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 28.5rem;
        height: 23.5rem;
    }

    .text {
        width: 29.875rem;

        h2 {
            font-size: 2rem;
            font-weight: 600;
            color: ${props => props.theme["base-title"]};
        }

        p {
            margin-top: 1.75rem;

            font-size: 1rem;
            color: ${props => props.theme["base-text-1"]};
        }
    }

    @media (max-width: 414px) {
        flex-direction: column;

        img {
            width: 15.375rem;
            height: 15.375rem;
        }

        .text {
            text-align: center;

            width: 22rem;
        }
    }
`