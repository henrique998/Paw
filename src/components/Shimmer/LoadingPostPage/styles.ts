import styled from "styled-components";
import Skeleton from "../../Skeleton";

export const Container = styled.div`

    header {
        margin-top: 3.625rem;
        max-width: 50.875rem;

        margin-left: auto;
        margin-right: auto;
    }

    .content {
        margin-top: 5rem;

        max-width: 74.375rem;
        margin-top: 4.75rem;
        margin-left: auto;
        margin-right: auto;

        display: flex;
        align-items: flex-start;
        gap: 4rem;
    }

    @media (max-width: 414px) {
        header {
            margin-top: 2.375rem;
            max-width: 19.625rem;
        }

        .content {
            max-width: 100%;

            flex-direction: column;

            padding: 0 1rem;
            margin-left: none;
            margin-right: none;

            display: block;
        }
    }
`
export const TitleSkeleton = styled(Skeleton)`
    width: 100%;
    height: 3.625rem;
    border-radius: 8px;

    @media (max-width: 414px) {
        width: 19.625rem;
        height: 4rem;
    }
`

export const BannerSkeleton = styled(Skeleton)`
    width: 100%;
    height: 31.25rem;

    @media (max-width: 414px) {
        height: 13.8125rem;
    }
`

export const InfoSkeleton = styled(Skeleton)`
    margin-top: 4px;

    width: 26.375rem;
    height: 1.5rem;
    border-radius: 4px;

    @media (max-width: 414px) {
        margin-top: 1.75rem;
        width: 16.5rem;
        height: 2.875rem;

        margin-left: auto;
        margin-right: auto;

        border-radius: 6px;
    }
`

export const ButtonSkeleton = styled(Skeleton)`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    @media (max-width: 414px) {
        display: none;
    }
`

export const ThinLineSkeleton = styled(Skeleton)`
    width: 43rem;
    height: 1.5rem;
    border-radius: 6px;

    margin-bottom: 2.25rem;

    @media (max-width: 414px) {
        width: 19.625rem;
        height: 3rem;
    }
`

export const LargLineSkeleton = styled(Skeleton)`
    width: 1100px;
    height: 4.5rem;
    border-radius: 6px;
    margin-bottom: 1.375rem;

    @media (max-width: 414px) {
        display: none;
    }
`

export const MediumLineSkeleton = styled(Skeleton)`
    width: 1100px;
    height: 3.375rem;
    border-radius: 6px;
    margin-bottom: 1.375rem;

    &.medium-line-2,
    &.medium-line-3,
    &.medium-line-4 {
        display: none;
    }

    @media (max-width: 414px) {
        width: 100%;

        &.medium-line-2,
        &.medium-line-3,
        &.medium-line-4 {
            display: block;
        }
    }
`