import Image from "next/future/image";
import { useSession, signOut } from "next-auth/react"
import * as Dialog from "@radix-ui/react-dialog";
import { HeaderProfileBox } from "./HeaderProfileBox";
import { ProfileContainer } from "./styles";

export function HeaderProfile() {
    const { data } = useSession()

    return (
        <ProfileContainer>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Image 
                        src={data?.user?.image ?? ""}
                        alt="sua foto" 
                        width={120} 
                        height={120} 
                    />
                </Dialog.Trigger>
                
                <HeaderProfileBox onSignOut={signOut} />
            </Dialog.Root>
        </ProfileContainer> 
    )
}