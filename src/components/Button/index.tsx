import { ButtonHTMLAttributes } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    variant: 'purple' | 'white'
}

export function Button({ label, variant }: ButtonProps) {
    return (
        <ButtonContainer variant={variant}>
            {label}
        </ButtonContainer>
    )
} 