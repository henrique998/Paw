import Link from "next/link"
import Image from "next/future/image"
import { ReactNode } from "react"
import { Note, Star } from 'phosphor-react'
import { NavLink } from "../../components/NavLink"
import { BlogHeader, BlogHeaderContainer, BottomBarMenu, Nav, OptionContainer } from "./styles"
import { useRouter } from "next/router"
import { ProfileBox } from "./ProfileBox"

interface BlogLayoutProps {
    children: ReactNode
}

export function BlogLayout({ children }: BlogLayoutProps) {
   const { pathname } = useRouter()

   const isIconActive = (path: string) => {
        return pathname === path
   }

    return (
        <>
            <BlogHeader>
                <BlogHeaderContainer>
                    <div className="header-left">
                        <Image src="/Logo.svg" alt="" width={76} height={42} />

                        <Nav>
                            <ul>
                                <NavLink path="/last-posts" label="Últimos posts" />
                                <NavLink path="/most-popular" label="Mais Populares" />
                            </ul>
                        </Nav>
                    </div>

                    <div className="header-right">
                        <span>Olá, <strong>Rafaela</strong></span>

                        <div className="profile">
                            <Image src="/woman-02.png" alt="" width={120} height={120} />

                            {/* <ProfileBox className="profileBox-header" /> */}
                        </div> 
                    </div>
                </BlogHeaderContainer>
            </BlogHeader>

            {children}

            <BottomBarMenu>
                <ul>
                    <OptionContainer isActive={isIconActive("/last-posts")}>
                        <Link href="/last-posts">
                            <a>
                                <Note 
                                    size={32} 
                                    weight={isIconActive("/last-posts") ? 'fill' : 'regular'} 
                                />
                            </a>
                        </Link>
                    </OptionContainer>

                    <OptionContainer isActive={isIconActive("/most-popular")}>
                        <Link href="/most-popular">
                            <a>
                                <Star 
                                    size={32} 
                                    weight={isIconActive("/most-popular") ? 'fill' : 'regular'} 
                                />
                            </a>
                        </Link>
                    </OptionContainer>

                    <li className="profile">
                        {/* <ProfileBox className="profileBox-bottom-bar" /> */}

                        <Image 
                            src="/woman-02.png" 
                            alt="sua foto" 
                            width={120} 
                            height={120} 
                        />
                    </li>
                </ul>
            </BottomBarMenu>
        </>
    )
}