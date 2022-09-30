import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/future/image";
import { XCircle } from "phosphor-react";
import { AuthOption, AuthOptionsContainer, Button, ModalContent, ModalDescription, ModalOverlay, ModalTitle, Separator } from "../styles";


export function SignUpModal() {
    return (
        <Dialog.Root>
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
                            <AuthOption href="#">
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
                            <AuthOption href="#">
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
                            <AuthOption href="#">
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

                    <Separator>Ou</Separator>
                    
                    <Button variant="purple" className="signup-btn">Entre</Button>
                </ModalContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}