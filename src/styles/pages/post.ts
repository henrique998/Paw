import styled from "styled-components";

export const PostContainer = styled.main`
    > img {
        width: 100%;
        height: 31.25rem;
        object-fit: cover;
    }

    .content {
        max-width: 74.375rem;
        margin-top: 4.75rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1rem 1rem 1rem;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 4rem;
    }

    @media (max-width: 414px) {
        padding-bottom: 3rem;

        > img {
            height: 13.75rem;
        }

        .content {
            margin-top: 3.75rem;

            aside {
                display: none;
            }
        }
    }
`

export const PostHeading = styled.header`
    margin-top: 3.625rem;
    
    max-width: 50.875rem;
    margin-left: auto;
    margin-right: auto;

    h1 {
        color: ${props => props.theme["base-title"]};

        font-size: 3rem;
        font-weight: 700;
    }

    .post-info {
        margin-top: 0.75rem;

        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            font-weight: 500;

            display: flex;
            align-items: center;
            gap: 0.375rem; 
            color: ${props => props.theme["base-text-1"]};
        }

        time {
            font-size: 1rem;
            font-weight: 500;
            color: ${props => props.theme["base-text-1"]};
        }
    }

    @media (max-width: 414px) {
        margin-top: 2rem;
        max-width: 22.75rem;

        h1 {
            font-size: 2rem;
            text-align: center;
            /* margin: 0 auto;  */
        }

        .post-info {
            margin-top: 1.25rem;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;

            span + span {
                margin-left: 0.5rem;
            }
        }
    }
`

export const LikeButton = styled.button`
    svg {
        color: ${props => props.theme["base-text-2"]};
    }
`

export const PostContent = styled.article`
    p {
        font-size: 1rem;
        color: ${props => props.theme["base-text-2"]};
        line-height: 1.25rem;
    }

    p + p {
        margin-top: 1.25rem;
    }
`

export const MobileLikeButtonContainer = styled.div`
    display: none;
    
    @media (max-width: 414px) {
        display: block;
        
        position: fixed;
        right: 1rem;
        bottom: 6.25rem;
        z-index: 100;
        
        background-color: ${props => props.theme["base-card-bg"]};
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 50%;
        box-shadow: ${props => props.theme["base-bottom-bar-shadow"]};

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const AuthorContainer = styled.div`
    max-width: 74.375rem;
    margin-top: 12.5rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;


    h2 {
        font-size: 2rem;
        font-weight: 500;
        color: ${props => props.theme["base-title"]};
    }

    img {
        margin-top: 2.625rem;

        width: 6.25rem;
        height: 6.25rem;
        border-radius: 50%;
        object-fit: cover;
    }

    strong {
        margin-top: 2.625rem;

        font-size: 1.25rem;
        font-weight: 500;

        color: ${props => props.theme["base-title"]};
    }

    @media (max-width: 414px) {
        margin-top: 4.5rem;

        h2 {
            font-size: 1.5rem;
        }

        img {
            width: 4.25rem;
            height: 4.25rem;
        }

        span {
            margin-top: 1rem;
        }
    } 
`