import Image from "next/future/image";
import Link from "next/link";
import { PostCardContainer } from "./styles";

interface Post {
    
} 

interface PostCardProps {
    className?: string
    banner: string
    title: string
    excerpt: string | undefined | null
    slug: string
}

export function PostCard({ className, banner, title, excerpt, slug }: PostCardProps) {
    return (
        <Link href={`/post/${slug}`} className={className}>
            <a>
                <PostCardContainer>
                    <Image 
                        src={banner}
                        alt="imagem de um cachorro" 
                        width={924} 
                        height={516} 
                    />

                    <h2>{title}</h2>

                    <p>{excerpt}</p>
                </PostCardContainer>
            </a>
        </Link>
    )
}