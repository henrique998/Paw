import { 
    BannerSkeleton, 
    ButtonSkeleton, 
    Container, 
    InfoSkeleton, 
    LargLineSkeleton, 
    MediumLineSkeleton, 
    ThinLineSkeleton, 
    TitleSkeleton 
} from "./styles";

export function LoadingPostPage() {
    return (
        <Container>
            <BannerSkeleton />

            <header>
                <TitleSkeleton />
                <InfoSkeleton />
            </header>

            <div className="content">
                <aside>
                    <ButtonSkeleton />
                </aside>

                <article>
                    <ThinLineSkeleton />

                    <LargLineSkeleton />
                    <LargLineSkeleton />
                    <LargLineSkeleton />

                    <MediumLineSkeleton />
                    <MediumLineSkeleton className="medium-line-2" />
                    <MediumLineSkeleton className="medium-line-3" />
                    <MediumLineSkeleton className="medium-line-4" />
                </article>
            </div>
        </Container>
    )
}