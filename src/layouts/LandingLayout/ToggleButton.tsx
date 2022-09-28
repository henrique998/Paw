import Image from "next/image";
import { ToggleButtonContainer } from "./styles";

export function ToggleButton() {
    return (
        <ToggleButtonContainer>
            <Image 
                src="/Menu-Button.svg" 
                alt="botão para abrir o menu mobile" 
                width={24} 
                height={24} 
            />
        </ToggleButtonContainer>
    )
}