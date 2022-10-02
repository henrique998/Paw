import styled from "styled-components";
import Skeleton from "../../Skeleton";

export const Container = styled.div`
    max-width: 1118px;
    margin: 0 auto;
    padding: 1rem;

    section {
        margin-top: 4rem;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
    }

    @media (max-width: 414px) {
        section {
            grid-auto-flow: row;
            grid-template-columns: 1fr;
        }
    }
`
export const TitleSkeleton = styled(Skeleton)`
    margin-top: 4.375rem;

    width: 47.25rem;
    height: 9.125rem;

    border-radius: 6px;
    
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 414px) {
        width: 19.25rem;
        height: 4rem;
    }
`

export const SubTitleSkeleton = styled(Skeleton)`
    margin-top: 1.625rem;
    margin-left: auto;
    margin-right: auto;

    width: 35.25rem;
    height: 4rem;

    border-radius: 6px;

    @media (max-width: 414px) {
        width: 100%;
        height: 4rem;
    }
`

export const PostSkeleton = styled(Skeleton)`
    width: 21.25rem;
    height: 26.25rem;

    border-radius: 12px;

    @media (max-width: 414px) {
        margin-left: auto;
        margin-right: auto;
    }
`