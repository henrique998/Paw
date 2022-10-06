import { NavLink } from "../../components/NavLink";
import { Nav } from "./styles";

export function MenuLinksList() {
    return (
        <Nav>
            <ul>
                <NavLink path="/last-posts" label="Últimos posts" />
                <NavLink path="/food" label="Comida" />
                <NavLink path="/sleep" label="Sono" />
                <NavLink path="/tour" label="Passeio" />
                <NavLink path="/travel" label="Viagem" />
                <NavLink path="/bath" label="Banho" />
                <NavLink path="/play" label="Brincadeiras" />
            </ul>
        </Nav>
    )
}