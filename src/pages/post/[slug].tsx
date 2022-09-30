import Image from "next/future/image";
import { Eye, Heart } from "phosphor-react";

import { BlogLayout } from "../../layouts/BlogLayout";
import { AuthorContainer, LikeButton, MobileLikeButtonContainer, PostContainer, PostContent, PostHeading } from "../../styles/pages/post";

export default function Post() {
    return (
        <BlogLayout>
            <PostContainer>
                <Image 
                    src="/dog-image-2.png" 
                    width={4320} 
                    height={1500} 
                    alt="thumbnail" 
                />

                <PostHeading>
                    <h1>Como brincar com o seu cachorro</h1>

                    <div className="post-info">
                        <span className="views">
                            <Eye size={20} weight={'bold'} />
                            54
                        </span>

                        <span>
                            <Heart size={20} weight={'bold'} />
                            32
                        </span>

                        <time>segunda, 26 de setembro de 2022</time>
                    </div>
                </PostHeading>

                <div className="content">
                    <aside>
                        <LikeButton>
                            <Heart size={24} />
                        </LikeButton>
                    </aside>

                    <PostContent>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            Ut interdum mi non est finibus, nec tempus felis hendrerit.   
                        </p>

                        <p>
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <p>
                            Morbi pellentesque, leo ac imperdiet 
                            facilisis, purus purus consectetur ipsum, nec pretium diam nisl porta ante. Sed lacinia est velit, 
                            hendrerit elementum elit semper in. Proin eget ipsum lorem. Duis in ipsum interdum, 
                            hendrerit lectus eu, ullamcorper arcu.
                        </p>

                        <p>
                            Integer fringilla mi eget dui hendrerit, eu luctus dui lobortis. Nunc in ipsum sit amet 
                            massa venenatis faucibus. Sed viverra elit in eleifend interdum. Sed et augue nec justo vehicula 
                            pellentesque. Nam in lorem id nisi lacinia viverra non nec turpis. Maecenas imperdiet maximus metus, 
                            eget fermentum mi malesuada eget. Morbi dignissim sit amet augue non ultricies.
                        </p>

                        <p>
                            fringilla risus in, ornare nibh. Maecenas dignissim quam non mauris consectetur ornare. 
                            Morbi malesuada eros eu quam fringilla, eleifend faucibus lacus pulvinar. Nunc vitae lectus sed nisi dictum euismod. 
                            Cras ac efficitur ipsum. Nulla ut nisi ut lectus laoreet sodales id ac nibh. Duis a iaculis nulla. 
                            Integer mauris metus, pulvinar eget mattis nec, rutrum id ante. Nullam ante lorem, sodales quis convallis ut, 
                            auctor id nibh.
                        </p>

                        <p>
                            Proin pellentesque magna a tempor vestibulum. Donec dapibus interdum metus et pharetra. 
                            Aliquam tristique pellentesque ex, at egestas tortor. Pellentesque arcu nisl, tincidunt a enim id, 
                            porttitor facilisis est. Nulla luctus, risus a ullamcorper pellentesque, sem ante efficitur dolor, 
                            et volutpat turpis odio eget est.
                        </p>

                        <p>
                            Integer vestibulum arcu tellus, vel gravida sem malesuada eu. 
                            Vivamus mollis nisl id orci convallis placerat. Nam vehicula risus nec quam egestas, nec tincidunt massa auctor. 
                            Ut convallis varius purus sed semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Praesent ultricies sit amet ex id iaculis.
                        </p>

                        <p>
                            Nulla facilisi. Duis gravida luctus mi, vitae tempor elit hendrerit at. 
                            Vestibulum sed varius mi, vitae vulputate nisl. Sed ultricies, massa eu pellentesque cursus, libero tellus finibus lacus, 
                            volutpat tincidunt massa quam tincidunt massa. Sed at lobortis velit. Vestibulum arcu enim, commodo eget mattis a, 
                            consectetur consequat odio. Quisque euismod vitae felis condimentum tristique.
                        </p>
                    </PostContent>
                </div>

                <MobileLikeButtonContainer>
                    <LikeButton>
                        <Heart size={26} />
                    </LikeButton>
                </MobileLikeButtonContainer>

                <AuthorContainer>
                    <h2>Escrito por</h2>

                    <Image 
                        src="/woman-02.png" 
                        alt="" 
                        width={300} 
                        height={300} 
                    />

                    <strong>Luciana ferreira</strong>
                </AuthorContainer>
            </PostContainer>
        </BlogLayout>
    )
}