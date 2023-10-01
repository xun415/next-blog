"use client"
import Link from "next/link";
import { Nanum_Gothic } from 'next/font/google'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import {LAYOUT} from "@/constatns/layout";

type LinkAttr = {
    to: string
    title: string
}

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggleOpenMenu = () => {
        setIsOpenMenu(prev => !prev)
    }
    const links: LinkAttr[] = [
        {
            to: '/',
            title: 'home'
        },
        {
            to: '/about',
            title: 'about'
        },
        {
            to: '/posts',
            title: 'posts'
        },
        {
            to: '/contact',
            title: 'contact'
        },
    ]

    return <header className={`w-full fixed top-0 left-0 z-50 flex justify-center items-center border-y-2 bg-white h-16`}>
        <div className={'container flex justify-between p-4 '}>
            <h1 className={'text-xl font-bold'}>
                <Link href={'/'}>
                    Taehun's BLOG
                </Link>
            </h1>
            <nav className={'flex gap-4 text-sm hidden md:flex'}>
                {
                    links.map(link =>
                        <Link key={link.title} href={link.to} className={'transition-colors hover:text-blue-400'}>{link.title}</Link>
                    )
                }
            </nav>
            <div className={'md:hidden flex items-center cursor-pointer'}
                 onClick={toggleOpenMenu}
            >
                {isOpenMenu? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
        </div>
        {
            isOpenMenu &&
            <nav className={'md:hidden top-16 fixed w-full py-2 flex flex-col text-center bg-white border-b-2 text-sm'}>
                {
                    links.map(link =>
                        <Link key={link.title} href={link.to} className={'transition-colors hover:text-blue-400'}>{link.title}</Link>
                    )
                }
            </nav>
        }
    </header>
}

export default Header