import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { PostCard } from "../components/PostCard";
import { GetPostsByCategoryDocument, useGetPostsByCategoryQuery } from "../graphql/generated/graphql";
import { BlogLayout } from "../layouts/BlogLayout";
import { client, ssrCache } from "../libs/urql";
import { PostsList } from "../styles/pages/last-posts";
import { MostPopularContainer, MostPopularHeading } from "../styles/pages/most-popular";

export default function Bath() {
    const [{ data }] = useGetPostsByCategoryQuery({
        variables: {
            categoryName: "bath"
        }
    })
    
    return (
        <BlogLayout>
            <MostPopularContainer>
                <MostPopularHeading>
                    <h1>Saiba como dar <span>banho</span> no seu cachorro</h1>

                    <p>
                        descubra as melhores técnicas para dar banho no seu pet. 
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
        categoryName: "bath"
    }).toPromise()       

    return {
        props: {
            urqlState: ssrCache.extractData()
        }
    }
}