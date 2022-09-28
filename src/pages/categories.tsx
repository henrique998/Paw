import { CategorieCard } from "../components/CategorieCard";
import { LandingLayout } from "../layouts/LandingLayout";
import { CategoriesContainer, CategoriesHeading, CategoriesList } from "../styles/pages/categories";

export default function Categories() {
    return (
        <LandingLayout>
            <CategoriesContainer>
                <CategoriesHeading>
                    <h1>Descubra quais <span>assuntos</span> abordamos<span>.</span></h1>

                    <p>Abordamos  assuntos essenciais para a vida dos nossos amigos.</p>
                </CategoriesHeading>

                <section>
                    <CategoriesList>
                        <li>
                            <CategorieCard 
                                src="/ilustrations/can-food.svg" 
                                label="Comida" 
                            />
                        </li>

                        <li>
                            <CategorieCard 
                                src="/ilustrations/bed.svg" 
                                label="Sono" 
                            />
                        </li>

                        <li>
                            <CategorieCard 
                                src="/ilustrations/collar.svg" 
                                label="Passeio" 
                            />
                        </li>

                        <li>
                            <CategorieCard 
                                src="/ilustrations/travel-bag.svg" 
                                label="Viagem" 
                            />
                        </li>

                        <li>
                            <CategorieCard 
                                src="/ilustrations/bath.svg" 
                                label="Banho" 
                            />
                        </li>

                        <li>
                            <CategorieCard 
                                src="/ilustrations/toys.svg" 
                                label="Brincadeiras" 
                            />
                        </li>
                    </CategoriesList>
                </section>
            </CategoriesContainer>
        </LandingLayout>
    )
}