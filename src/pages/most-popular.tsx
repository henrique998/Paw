import { GetServerSideProps } from "next";
import { PostCard } from "../components/PostCard";
import { BlogLayout } from "../layouts/BlogLayout";
import { PostsList } from "../styles/pages/last-posts";
import { MostPopularContainer, MostPopularHeading } from "../styles/pages/most-popular";

export default function MostPopular() {
   
    return (
        <BlogLayout>
            <MostPopularContainer>
                <MostPopularHeading>
                    <h1>Acesse os artigos mais <span>populares</span> do momento<span>.</span></h1>

                    <p>
                        Aqui você pode ver os posts mais acessados e descobrir algo 
                        a mais para se divertir com o seu doguinho.
                    </p>
                </MostPopularHeading>

                <section>
                    <PostsList>
                        <li>
                            {/* <PostCard /> */}
                        </li>
                    </PostsList>
                </section>
            </MostPopularContainer>
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

    // await client.query(GetLastPostsDocument, {}).toPromise()        

    return {
        props: {
            // urqlState: ssrCache.extractData()
        }
    }
}