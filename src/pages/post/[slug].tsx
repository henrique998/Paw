import { GetServerSideProps } from "next";
import Image from "next/future/image";
import { Heart } from "phosphor-react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetPostDocument, useGetPostQuery } from "../../graphql/generated/graphql";

import { BlogLayout } from "../../layouts/BlogLayout";
import { client, ssrCache } from "../../libs/urql";

import { 
    AuthorContainer, 
    LikeButton, 
    MobileLikeButtonContainer, 
    PostContainer, 
    PostContent, 
    PostHeading 
} from "../../styles/pages/post";
import { getSession } from "next-auth/react";

interface PostProps {
    slug: string
}

export default function Post({ slug }: PostProps) {
    const [{ data: postData }] = useGetPostQuery({
        variables: {
            slug
        }
    })

    const post = postData?.post
    return (
        <BlogLayout>
            <PostContainer>
                <Image 
                    src={post!.banner!.url}
                    width={4320} 
                    height={1500} 
                    alt="thumbnail" 
                />

                <PostHeading>
                    <h1>{post?.title}</h1>

                    <div className="post-info">
                        <time>
                            {format(parseISO(post?.publishedAt), "EEEE',' dd 'de' MMMM 'de' yyyy", {
                                locale: ptBR
                            })}
                        </time>
                    </div>
                </PostHeading>

                <div className="content">
                    <PostContent 
                        dangerouslySetInnerHTML={{ __html: post!.content.html }} 
                    />
                </div>

                <MobileLikeButtonContainer>
                    <LikeButton>
                        <Heart size={26} />
                    </LikeButton>
                </MobileLikeButtonContainer>

                <AuthorContainer>
                    <h2>Escrito por</h2>

                    <Image 
                        src={post!.author!.picture!.url} 
                        alt={`foto do autor(a) do post: ${post!.author!.name}`}
                        width={300} 
                        height={300} 
                    />

                    <strong>{post!.author!.name}</strong>
                </AuthorContainer>
            </PostContainer>
        </BlogLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
    const isUserAuthenticated = await getSession({ req })

    if (!isUserAuthenticated) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const slug = params?.slug

    await client.query(GetPostDocument, { slug }).toPromise()

    return {
        props: {
            urqlState: ssrCache.extractData(),
            slug
        }
    }
}