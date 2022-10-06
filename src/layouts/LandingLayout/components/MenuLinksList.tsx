import { useSession } from "next-auth/react";
import { NavLink } from "../../../components/NavLink";
import { Nav } from "../styles";

export function MenuLinksList() {
    const { status: sessionStatus } = useSession()
    
    return (
        <Nav>
            <ul>
                <NavLink path="/" label="Home" />
                <NavLink path="/about" label="Sobre nós" />
                <NavLink path="/categories" label="Categorias" />

                {sessionStatus === 'authenticated' && (
                    <NavLink path="/last-posts" label="Últimos posts" />
                )}
            </ul>
        </Nav>
    )
}