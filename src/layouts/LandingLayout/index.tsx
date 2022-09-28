import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { Button } from "../../components/Button"
import { NavLink } from "../../components/NavLink"
import { ButtonsContainer, LandingHeader, LandingHeaderContainer, Nav } from "./styles"
import { ToggleButton } from "./ToggleButton"

interface LandingLayoutProps {
  children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
      <>
        <LandingHeader>
          <LandingHeaderContainer>
            <Link href="/">
              <a>
                <Image src="/Logo.svg" alt="" width={76} height={42} />
              </a>
            </Link>

            <Nav>
              <ul>
                <NavLink path="/" label="Home" />
                <NavLink path="/about" label="Sobre nós" />
                <NavLink path="/categories" label="Categorias" />
              </ul>
            </Nav>

            <ToggleButton />

            <ButtonsContainer>
              <Button label="Entrar" variant="purple" />
              <Button label="Criar conta" variant="white" />
            </ButtonsContainer>
          </LandingHeaderContainer>
        </LandingHeader>

        {children}
      </>
  )
}