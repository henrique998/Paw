import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { PostCard } from "../components/PostCard";
import { GetPostsByCategoryDocument, useGetPostsByCategoryQuery } from "../graphql/generated/graphql";
import { BlogLayout } from "../layouts/BlogLayout";
import { client, ssrCache } from "../libs/urql";
import { PostsList } from "../styles/pages/last-posts";
import { MostPopularContainer, MostPopularHeading } from "../styles/pages/most-popular";

export default function Food() {
    const [{ data }] = useGetPostsByCategoryQuery({
        variables: {
            categoryName: "food"
        }
    })

    return (
        <BlogLayout>
            <MostPopularContainer>
                <MostPopularHeading>
                    <h1>Descubra as melhores dicas sobre <span>alimentação.</span></h1>

                    <p>
                        Saiba como preparar refeições deliciosas para o seu doguinho. 
                    </p>
                </MostPopularHeading>

                <section>
                    <PostsList>
                        {data?.posts.map(post => (
                            <li key={post.id}>
                                <PostCard 
                                    banner={post.banner.url}  
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    slug={post.slug}
                                />
                            </li>
                        ))}
                    </PostsList>
                </section>
            </MostPopularContainer>
        </BlogLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const isUserAuthenticated = await getSession({ req })

    if (!isUserAuthenticated) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    await client.query(GetPostsByCategoryDocument, {
        categoryName: "food"
    }).toPromise()        

    return {
        props: {
            urqlState: ssrCache.extractData()
        }
    }
}