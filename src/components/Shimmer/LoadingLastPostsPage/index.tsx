import Skeleton from "../../Skeleton";
import { Container, PostSkeleton, SubTitleSkeleton, TitleSkeleton } from "./styles";

export function LoadingLastPostsPage() {
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