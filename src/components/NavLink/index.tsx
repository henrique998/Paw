import Link from "next/link";
import { useRouter } from "next/router";
import { LiHTMLAttributes } from "react";
import { NavLinkContainer } from "./styles";

interface NavLinkProps extends LiHTMLAttributes<HTMLLIElement> {
    path: string
    label: string
}

export function NavLink({ path, label, ...rest }: NavLinkProps) {
    const { pathname } = useRouter()

    const isActive = pathname === path

    return (
        <NavLinkContainer isActive={isActive} {...rest}>
            <Link href={path}>
                <a>{label}</a>
            </Link>
        </NavLinkContainer>
    )
}