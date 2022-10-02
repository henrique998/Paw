import * as Dialog from '@radix-ui/react-dialog'
import { Power } from 'phosphor-react'
import { LoggoutButton, BottomProfileContainer } from './styles'

interface HeaderProfileBoxProps {
    onSignOut: () => void
}

export function BottomProfileBox({ onSignOut }: HeaderProfileBoxProps) {
    return (
        <Dialog.Portal>
            <BottomProfileContainer>
                <LoggoutButton onClick={() => onSignOut()}>
                    <Power size={24} weight={'bold'} />
                    Loggout
                </LoggoutButton>
            </BottomProfileContainer>
        </Dialog.Portal>
    )
}