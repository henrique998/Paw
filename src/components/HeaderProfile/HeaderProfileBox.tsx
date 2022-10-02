import * as Dialog from '@radix-ui/react-dialog'
import { Power } from 'phosphor-react'
import { LoggoutButton, HeaderProfileBoxContainer } from './styles'

interface HeaderProfileBoxProps {
    onSignOut: () => void
}

export function HeaderProfileBox({ onSignOut }: HeaderProfileBoxProps) {
    return (
        <Dialog.Portal>
            <HeaderProfileBoxContainer>
                <LoggoutButton onClick={() => onSignOut()}>
                    <Power size={24} weight={'bold'} />
                    Loggout
                </LoggoutButton>
            </HeaderProfileBoxContainer>
        </Dialog.Portal>
    )
}