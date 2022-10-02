import Image from "next/future/image"
import Link from "next/link"
import { ReactNode, useState } from "react"
import { useSession } from "next-auth/react"
import { NavLink } from "../../components/NavLink"
import { Sidebar } from "./components/Sidebar"
import { SignInModal } from "./components/SignInModal"
import { SignUpModal } from "./components/SignUpModal"
import { AvatarContainer, LandingHeader, LandingHeaderContainer, ModalsContainer, Nav } from "./styles"
import { MenuButton } from "./MenuButton"
import { HeaderProfile } from "../../components/HeaderProfile"

interface LandingLayoutProps {
  children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  const { status: sessionStatus, data: sessionData } = useSession()

  function handleOpenSidebar() {
    setIsSidebarOpen(true)
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false)
  }

  function handleChangeOpenStateSignInModal() {
    setIsSignInModalOpen(!isSignInModalOpen)
  }

  function handleChangeOpenStateSignUpModal() {
    setIsSignUpModalOpen(!isSignUpModalOpen)
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

                {sessionStatus === 'authenticated' && (
                  <NavLink path="/last-posts" label="Últimos posts" />
                )}
              </ul>
            </Nav>

            <MenuButton onOpen={handleOpenSidebar} />

            {sessionStatus === 'authenticated' ? (
              <HeaderProfile />
            ) : (
              <ModalsContainer>
                <SignInModal 
                  isModalOpen={isSignInModalOpen} 
                  onOpenChange={handleChangeOpenStateSignInModal}
                />

                <SignUpModal 
                  isModalOpen={isSignUpModalOpen} 
                  onOpenChange={handleChangeOpenStateSignUpModal} 
                />
              </ModalsContainer>
            )}

            <Sidebar 
              isSidebarOpen={isSidebarOpen} 
              onClose={handleCloseSidebar} 
              onOpenSignInModal={handleChangeOpenStateSignInModal}
              onOpenSignUpModal={handleChangeOpenStateSignUpModal}
            />
          </LandingHeaderContainer>
        </LandingHeader>

        {children}
      </>
  )
}