import * as Dialog from "@radix-ui/react-dialog"
import { Power } from "phosphor-react"
import { LoggoutButton, BottomProfileContainer } from "../styles"
import { SwitchButton } from "./SwitchButton"

export function BottomProfileBox() {
    return (
        <Dialog.Portal>
            <BottomProfileContainer>
                <SwitchButton />

                <LoggoutButton>
                    <Power size={24} weight={'bold'} />
                    Loggout
                </LoggoutButton>
            </BottomProfileContainer>
        </Dialog.Portal>
    )
}