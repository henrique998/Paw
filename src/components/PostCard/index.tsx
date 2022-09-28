import Image from "next/future/image";
import Link from "next/link";
import { PostCardContainer } from "./styles";

interface PostCardProps {
    className?: string
}

export function PostCard({ className }: PostCardProps) {
    return (
        <Link href="#" className={className}>
            <a>
                <PostCardContainer>
                    <Image 
                        src="/dog-image-2.png" 
                        alt="imagem de um cachorro" 
                        width={924} 
                        height={516} 
                    />

                    <h2>Como brincar com seu cachorro no dia a dia?</h2>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. 
                    </p>
                </PostCardContainer>
            </a>
        </Link>
    )
}