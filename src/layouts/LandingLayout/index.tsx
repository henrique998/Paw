import Image from "next/future/image"
import Link from "next/link"
import { ReactNode, useState } from "react"
import { useSession } from "next-auth/react"
import { Sidebar } from "./components/Sidebar"
import { SignInModal } from "./components/SignInModal"
import { SignUpModal } from "./components/SignUpModal"
import { LandingHeader, LandingHeaderContainer, ModalsContainer } from "./styles"
import { MenuButton } from "./components/MenuButton"
import { HeaderProfile } from "../../components/HeaderProfile"
import { MenuLinksList } from "./components/MenuLinksList"

interface LandingLayoutProps {
  children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  const { status: sessionStatus } = useSession()

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

            <MenuLinksList />

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