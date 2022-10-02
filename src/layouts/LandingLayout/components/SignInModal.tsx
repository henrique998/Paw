import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/future/image";
import { XCircle } from "phosphor-react";
import { signIn } from "next-auth/react";

import { 
    AuthOption, 
    AuthOptionsContainer, 
    Button, 
    ModalContent, 
    ModalDescription, 
    ModalOverlay, 
    ModalTitle, 
} from "../styles";


interface SignInModalProps {
    isModalOpen: boolean
    onOpenChange: () => void
}

export function SignInModal({ isModalOpen, onOpenChange }: SignInModalProps) {
    return (
        <Dialog.Root open={isModalOpen} onOpenChange={onOpenChange}>
            <Dialog.Trigger asChild>
                <Button variant="purple">
                    Entrar
                </Button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <ModalOverlay />

                <ModalContent>
                    <header>
                        <Image 
                            src="/modal-logo.svg" 
                            alt="" 
                            width={42} 
                            height={42} 
                        />

                        <Dialog.Close>
                            <XCircle size={24} />
                        </Dialog.Close>
                    </header>

                    <ModalTitle>Olá, seja bem vindo(a) outra vez</ModalTitle>
                    <ModalDescription>Entre e aproveite o conteúdo</ModalDescription>

                    <AuthOptionsContainer>
                        <li>
                            <AuthOption onClick={() => signIn('google')}>
                                <Image 
                                    src="/google-logo.svg" 
                                    alt="logo da google" 
                                    width={60} 
                                    height={60} 
                                />

                                <span>Entrar com google</span>
                            </AuthOption>
                        </li>

                        <li>
                            <AuthOption onClick={() => signIn('discord')}>
                                <Image 
                                    src="/discord-logo.svg" 
                                    alt="logo do discord" 
                                    width={60} 
                                    height={60} 
                                />

                                <span>Entrar com discord</span>
                            </AuthOption>
                        </li>

                        <li>
                            <AuthOption onClick={() => signIn('spotify')}>
                                <Image 
                                    src="/spotify-logo.svg" 
                                    alt="logo do spotify" 
                                    width={60} 
                                    height={60} 
                                />

                                <span>Entrar com spotify</span>
                            </AuthOption>
                        </li>
                    </AuthOptionsContainer>
                </ModalContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}