import styled from "styled-components";

export const CategorieCardContainer = styled.div`
    width: 21.25rem;
    height: 26.25rem;
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 12.5rem;
        height: 12.5rem;
    }

    h3 {
        text-align: center;
        font-size: 2.625rem;
        font-weight: 600;

        background: linear-gradient(90deg, #7504FB 63.95%, rgba(117, 4, 251, 0.54) 80.27%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    @media (max-width: 414px) {
        img {
            width: 9.375rem;
            height: 9.375rem;
        }

        h3 {
            font-size: 2rem;
        }
    }
` 