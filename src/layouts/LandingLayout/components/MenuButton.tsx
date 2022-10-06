import Image from "next/image";
import { MenuButtonContainer } from "../styles";

interface MenuButtonProps {
    onOpen: () => void
}

export function MenuButton({ onOpen }: MenuButtonProps) {
    return (
        <MenuButtonContainer onClick={onOpen}>
            <Image 
                src="/Menu-Button.svg" 
                alt="botão para abrir o menu mobile" 
                width={24} 
                height={24} 
            />
        </MenuButtonContainer>
    )
}