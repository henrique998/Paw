import { Power } from 'phosphor-react'
import { LoggoutButton, ProfileContainer } from './styles'

interface ProfileBoxProps {
    className?: string
}

export function ProfileBox({ className }: ProfileBoxProps) {
    return (
        <ProfileContainer className={className}>
            <LoggoutButton>
                <Power size={24} weight={'bold'} />
                Loggout
            </LoggoutButton>
        </ProfileContainer>
    )
}