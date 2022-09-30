import Link from "next/link";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { NavLink } from "../../../../components/NavLink";
import { Button } from "../../../../components/Button";
import { ButtonsContainer, CloseButton, SidebarContainer, SidebarHeader, SidebarNav } from "./styles";

interface SidebarProps {
    isSidebarOpen: boolean
    onClose: () => void 
}

export function Sidebar({ isSidebarOpen, onClose }: SidebarProps) {
    return (
        <SidebarContainer 
            animate={{
                left: isSidebarOpen ? 0 : '-100%'
            }}
            transition={{
                duration: 0.1,
            }}
        >
            <SidebarHeader>
                <Link href="/">
                    <a>
                        <Image src="/modal-logo.svg" alt="" width={76} height={42} />
                    </a>
                </Link>

                <CloseButton onClick={onClose}>
                    <X size={24} />
                </CloseButton>
            </SidebarHeader>

            <SidebarNav>
                <ul>
                    <NavLink path="/" label="Home" onClick={onClose} />
                    <NavLink path="/about" label="Sobre nós" onClick={onClose} />
                    <NavLink path="/categories" label="Categorias" onClick={onClose} />
                </ul>
            </SidebarNav>

            <ButtonsContainer>
                <Button variant="purple" label="Entrar" />
                <Button variant="white" label="Criar conta" />
            </ButtonsContainer>
        </SidebarContainer>
    )
}