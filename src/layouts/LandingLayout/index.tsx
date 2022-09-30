import Image from "next/image"
import Link from "next/link"
import { ReactNode, useState } from "react"
import { Button } from "../../components/Button"
import { NavLink } from "../../components/NavLink"
import { Sidebar } from "./components/Sidebar"
import { SignInModal } from "./components/SignInModal"
import { SignUpModal } from "./components/SignUpModal"
import { LandingHeader, LandingHeaderContainer, ModalsContainer, Nav } from "./styles"
import { MenuButton } from "./MenuButton"

interface LandingLayoutProps {
  children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function handleOpenSidebar() {
    setIsSidebarOpen(true)
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false)
  }

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

            <MenuButton onOpen={handleOpenSidebar} />

            <ModalsContainer>
              <SignInModal />
              <SignUpModal />
            </ModalsContainer>

            <Sidebar isSidebarOpen={isSidebarOpen} onClose={handleCloseSidebar} />
          </LandingHeaderContainer>
        </LandingHeader>

        {children}
      </>
  )
}