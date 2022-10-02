import { GetServerSideProps } from "next";
import { PostCard } from "../components/PostCard";
import { GetLastPostsDocument, useGetLastPostsQuery } from "../graphql/generated/graphql";
import { BlogLayout } from "../layouts/BlogLayout";
import { client, ssrCache } from "../libs/urql";
import { LastPostsContainer, LastPostsHeading, PostsList } from "../styles/pages/last-posts";

export default function LastPosts() {
    const [{ data }] = useGetLastPostsQuery()

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
                        {data?.posts.map(post => (
                            <li key={post.id}>
                                <PostCard  
                                    banner={post.banner!.url}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    slug={post.slug}
                                />
                            </li>
                        ))}
                    </PostsList>
                </section>
            </LastPostsContainer>
        </BlogLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const nextAuthToken = req.cookies['next-auth.session-token']

    if (!nextAuthToken) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    await client.query(GetLastPostsDocument, {}).toPromise()        

    return {
        props: {
            urqlState: ssrCache.extractData()
        }
    }
}
