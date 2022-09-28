import styled from "styled-components";

export const HomeContainer = styled.main`
    height: calc(100% - 4.375rem);
    overflow-x: hidden;
    padding: 1rem;

    position: relative;

    .dog-food-1 {
        position: absolute;
        z-index: 100;

        width: 10.25rem;
        height: 7.875rem;

        top: 96px;
        left: 156px;
    }

    .dog-food-2 {
        position: absolute;
        z-index: 100;

        width: 10.25rem;
        height: 7.875rem;

        top: 56px;
        right: 188px;
    }

    .dog-bath {
        position: absolute;
        z-index: 100;

        width: 15.125rem;
        height: 17.125rem;

        bottom: 0px;
        right: 188px;
    }

    @media (max-width: 414px) {
        .dog-food-1 {
            width: 6.375rem;
            height: 6.5rem;

            top: 5px;
            left: 16px;
        }

        .dog-food-2 {
            width: 9.5rem;
            height: 9.875rem;

            top: 234px;
            right: -47px;
        }

        .dog-bath {
            width: 9.5rem;
            height: 13.875rem;

            top: 260px;
            left: -20px;

            z-index: -1;
        }
    }
`

export const HomeHeading = styled.header`
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

export const NewsletterContainer = styled.div`
    max-width: 30.875rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5.875rem;

    text-align: center;

    > span {

        color: ${props => props.theme["base-brand"]};
        font-weight: 500;
        font-size: 0.875rem;
    }

    form {
        margin-top: 2.25rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.625rem;

        height: 3.25rem;
        width: 30.875rem;

        input {
            flex: 1;

            height: 100%;
            
            border: 1px solid transparent;
            background-color: ${props => props.theme["base-input-bg"]};
            border-radius: 8px;
            padding: 0 1.25rem;

            &::placeholder {
                color: ${props => props.theme["base-text-1"]}
            }

            &:focus {
                border-color: ${props => props.theme["base-text-1"]}
            }
        }
    }

    @media (max-width: 414px) {
        form {
            height: 146px;
            width: 100%;
            display: grid;
            gap: 1rem;
            
            input {
                height: 60px;
            }

            button {
                height: 60px;
            }
        }
    }
`

export const SubscribersCountContainer = styled.div`
    margin-top: 6.25rem;
    margin-left: 6rem;

    display: flex;
    align-items: flex-start;
    gap: 1.375rem;

    .images {
        img {
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid ${props => props.theme.white};
        }

        img + img {
            margin-left: -1rem;
        }
    }

    .texts {

        strong {
            font-size: 2rem;
            font-weight: 700;

            color: ${props => props.theme["base-title"]};
        }

        p {
            width: 10.5rem;
            margin-top: 4px;

            font-size: 0.75rem;
            font-weight: 600;

            color: ${props => props.theme["base-text-1"]};
        }
    }

    @media (max-width: 414px) {
        margin-left: 0;
        margin-top: 3.75rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.375rem;
    }
`