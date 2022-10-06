import Link from "next/link"
import Image from "next/future/image"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import { useSession } from "next-auth/react"
import { Note, Star } from "phosphor-react"

import { BottomBarProfile } from "../../components/BottomBarProfile"
import { HeaderProfile } from "../../components/HeaderProfile"
import { NavLink } from "../../components/NavLink"

import { BlogHeader, BlogHeaderContainer, BottomBarMenu, Nav, OptionContainer } from "./styles"
import { MenuLinksList } from "./MenuLinksList"

interface BlogLayoutProps {
    children: ReactNode
}

export function BlogLayout({ children }: BlogLayoutProps) {
    const { data } = useSession()
    const { pathname } = useRouter()

    const isIconActive = (path: string) => {
        return pathname === path
    }

    return (
        <>
            <BlogHeader>
                <BlogHeaderContainer>
                    <div className="header-left">
                        <Link href="/">
                            <a>
                                <Image 
                                    src="/Logo.svg" 
                                    alt="" 
                                    width={76} 
                                    height={42} 
                                />
                            </a>
                        </Link>

                        <MenuLinksList />
                    </div>

                    <div className="header-right">
                        <span>Olá, <strong>{data?.user?.name}</strong></span>

                        <HeaderProfile />
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

                    <li>
                        <BottomBarProfile />
                    </li>
                </ul>
            </BottomBarMenu>
        </>
    )
}