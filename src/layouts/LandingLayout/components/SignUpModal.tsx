import * as Dialog from "@radix-ui/react-dialog";
import { signIn } from "next-auth/react";
import Image from "next/future/image";
import { XCircle } from "phosphor-react";
import { AuthOption, AuthOptionsContainer, Button, ModalContent, ModalDescription, ModalOverlay, ModalTitle, Separator } from "../styles";

interface SignUpModalProps {
    isModalOpen: boolean
    onOpenChange: () => void
}

export function SignUpModal({ isModalOpen, onOpenChange }: SignUpModalProps) {
    return (
        <Dialog.Root open={isModalOpen} onOpenChange={onOpenChange}>
            <Dialog.Trigger asChild>
                <Button variant="white">
                    Criar conta
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

                    <ModalTitle>Olá, vamos criar uma conta?</ModalTitle>

                    <ModalDescription>Crie uma conta e receba dicas todos os dias</ModalDescription>

                    <AuthOptionsContainer>
                        <li>
                            <AuthOption onClick={() => signIn('google')}>
                                <Image 
                                    src="/google-logo.svg" 
                                    alt="logo da google" 
                                    width={60} 
                                    height={60} 
                                />

                                <span>Criar conta com google</span>
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

                                <span>Criar conta com discord</span>
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

                                <span>Criar conta com spotify</span>
                            </AuthOption>
                        </li>
                    </AuthOptionsContainer>
                </ModalContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}