import styled from "styled-components";

export const PostCardContainer = styled.div`
    width: 21.25rem;
    height: 26.25rem;
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 12px;
    padding: 1rem;

    img {
        width: 19.25rem;
        height: 10.75rem;
        border-radius: 12px;
        object-fit: cover;
    }

    h2 {
        margin-top: 1.25rem;

        font-size: 1.375rem;
        font-weight: 600;
        color: ${props => props.theme["base-title"]};

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        margin-top: 1.25rem;

        font-size: 1rem;
        color: ${props => props.theme["base-text-2"]};

        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0px 0px 36px 1px rgba(162, 159, 159, 0.15);
    }
`