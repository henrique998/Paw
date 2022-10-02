import Link from "next/link";
import Image from "next/future/image";
import { useSession } from "next-auth/react"
import { X } from "phosphor-react";
import { NavLink } from "../../../../components/NavLink";
import { Button } from "../../../../components/Button";
import { AvatarContainer, ButtonsContainer, CloseButton, SidebarContainer, SidebarHeader, SidebarNav } from "./styles";
import { HeaderProfile } from "../../../../components/HeaderProfile";

interface SidebarProps {
    isSidebarOpen: boolean
    onClose: () => void
    onOpenSignInModal: () => void
    onOpenSignUpModal: () => void
}

export function Sidebar({ isSidebarOpen, onClose, onOpenSignInModal, onOpenSignUpModal }: SidebarProps) {
    const { status: sessionStatus, data: sessionData } = useSession()

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

                    {sessionStatus === 'authenticated' && (
                        <NavLink path="/last-posts" label="Últimos posts" onClick={onClose} />
                    )}
                </ul>
            </SidebarNav>

            {sessionStatus === 'authenticated' ? (
                <HeaderProfile />
            ) : (
                <ButtonsContainer>
                    <Button 
                        variant="purple" 
                        label="Entrar" 
                        onClick={() => onOpenSignInModal()} 
                    />

                    <Button 
                        variant="white" 
                        label="Criar conta" 
                        onClick={onOpenSignUpModal} 
                    />
                </ButtonsContainer>
            )}
        </SidebarContainer>
    )
}