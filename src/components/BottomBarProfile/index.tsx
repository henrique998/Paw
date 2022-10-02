import Image from "next/future/image";
import { useSession, signOut } from "next-auth/react"
import * as Dialog from "@radix-ui/react-dialog";
import { BottomProfileBox } from "./BottomProfileBox";

export function BottomBarProfile() {
    const { data } = useSession()

    return (
        <Dialog.Root>
            <BottomProfileBox onSignOut={signOut} />

            <Dialog.Trigger>
                <Image 
                    src={data?.user?.image ?? ""}
                    alt="sua foto" 
                    width={120} 
                    height={120} 
                />
            </Dialog.Trigger>
        </Dialog.Root>
    )
}