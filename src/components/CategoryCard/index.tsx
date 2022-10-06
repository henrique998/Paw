import Image from "next/future/image";
import { CategorieCardContainer } from "./styles";

interface CategorieCardProps {
    src: string
    label: string
}

export function CategoryCard({ src, label }: CategorieCardProps) {
    return (
        <CategorieCardContainer>
            <Image src={src} alt="" width={600} height={600} />
            
            <h3>{label}</h3>
        </CategorieCardContainer>
    )
}