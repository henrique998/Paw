import { Container, PostSkeleton, SubTitleSkeleton, TitleSkeleton } from "./styles";

export function LoadingMostPopularPage() {
    return (
        <Container>
            <TitleSkeleton />
            <SubTitleSkeleton />

            <section>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
            </section>
        </Container>
    )
}