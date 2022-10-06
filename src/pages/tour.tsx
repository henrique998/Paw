import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { PostCard } from "../components/PostCard";
import { GetPostsByCategoryDocument, useGetPostsByCategoryQuery } from "../graphql/generated/graphql";
import { BlogLayout } from "../layouts/BlogLayout";
import { client, ssrCache } from "../libs/urql";
import { PostsList } from "../styles/pages/last-posts";
import { MostPopularContainer, MostPopularHeading } from "../styles/pages/most-popular";

export default function Tour() {
    const [{ data }] = useGetPostsByCategoryQuery({
        variables: {
            categoryName: "tour"
        }
    })
    
    return (
        <BlogLayout>
            <MostPopularContainer>
                <MostPopularHeading>
                    <h1>Saiba como <span>passear</span> com o seu cachorro</h1>

                    <p>
                        Acompanhe dicas sobre passeio e as melhores práticas nesse momento 
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
        categoryName: "tour"
    }).toPromise()       

    return {
        props: {
            urqlState: ssrCache.extractData()
        }
    }
}