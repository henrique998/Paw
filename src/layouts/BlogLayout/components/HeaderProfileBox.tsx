import * as Dialog from '@radix-ui/react-dialog'
import { Power } from 'phosphor-react'
import { LoggoutButton, HeaderProfileContainer } from '../styles'
import { SwitchButton } from './SwitchButton'

export function HeaderProfileBox() {
    return (
        <Dialog.Portal>
            <HeaderProfileContainer>
                <SwitchButton />

                <LoggoutButton>
                    <Power size={24} weight={'bold'} />
                    Loggout
                </LoggoutButton>
            </HeaderProfileContainer>
        </Dialog.Portal>
    )
}