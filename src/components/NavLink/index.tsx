import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkContainer } from "./styles";

interface NavLinkProps {
    path: string
    label: string
}

export function NavLink({ path, label }: NavLinkProps) {
    const { pathname } = useRouter()

    const isActive = pathname === path

    return (
        <NavLinkContainer isActive={isActive}>
            <Link href={path}>
                <a>{label}</a>
            </Link>
        </NavLinkContainer>
    )
}