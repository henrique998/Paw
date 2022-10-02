import Image from "next/future/image";
import { LandingLayout } from "../layouts/LandingLayout";
import { AboutContainer, AboutHeading, ContentContainer } from "../styles/pages/about";

export default function About() {
    return (
        <LandingLayout>
            <main>
                <AboutContainer>
                    <AboutHeading>
                        <h1>Descubra qual é o nosso <span>próposito.</span></h1>

                        <p>Saiba um pouco da nosso história e o por quê de criarmos este blog.</p>
                    </AboutHeading>

                    <ContentContainer>
                        <Image 
                            src="/dog-image.png" 
                            alt="cachorro em uma moldura da cor roxa" 
                            width={1656} 
                            height={1416} 
                        />

                        <div className="text">
                            <h2>A nossa missão</h2>

                            <p>
                                A “Paw” é uma ong de acolhimento animal em situação de abandono. 
                                Nós prezamos muito pela saúde e felicidade dos nossos amigos de quatro patas e por isso decidimos criar este blog para dar dicas de como ajudar eles a terem uma vida melhor, 
                                seja através de brincadeiras, uma melhor alimentação, um bom banho ou tudo isso junto (kkkk). 
                                Então gostaríamos muito da sua ajuda para tornar a vida dos nossos amiguinhos.
                            </p>
                        </div>
                    </ContentContainer>
                </AboutContainer>
            </main>
        </LandingLayout>
    )
}

