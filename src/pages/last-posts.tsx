import { PostCard } from "../components/PostCard";
import { BlogLayout } from "../layouts/BlogLayout";
import { LastPostsContainer, LastPostsHeading, PostsList } from "../styles/pages/last-posts";

export default function LastPosts() {
    return (
        <BlogLayout>
            <LastPostsContainer>
                <LastPostsHeading>
                    <h1>Acompanhe os nossos últimos <span>artigos.</span></h1>

                    <p>
                        Publicamos artigos todos os dias para ajudar você a cuidar melhor 
                        dos nossos amiguinhos de 4 patas.
                    </p>
                </LastPostsHeading>

                <section>
                    <PostsList>
                        <li>
                            <PostCard />
                        </li>

                        <li>
                            <PostCard />
                        </li>

                        <li>
                            <PostCard />
                        </li>

                        <li>
                            <PostCard />
                        </li>

                        <li>
                            <PostCard />
                        </li>

                        <li>
                            <PostCard />
                        </li>
                    </PostsList>
                </section>
            </LastPostsContainer>
        </BlogLayout>
    )
}