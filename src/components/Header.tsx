"use client"
import Link from "next/link";
import { Nanum_Gothic } from 'next/font/google'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

const gothicBold = Nanum_Gothic({
    subsets: ['latin'],
    weight: '800'
})

type LinkAttr = {
    to: string
    title: string
}

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
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

    return <header className={'w-full fixed top-0 left-0 z-50 flex items-center border-2 bg-white h-16'}>
        <div className={'w-full flex justify-between p-4 '}>
            <h1 className={`${gothicBold.className} text-xl font-bold cur`}>
                <Link href={'/'}>
                    FETH'S BLOG
                </Link>
            </h1>
            <nav className={'flex gap-4 text-sm hidden md:flex'}>
                {
                    links.map(link =>
                        <Link key={link.title} href={link.to} className={'transition-colors hover:text-blue-400'}>{link.title}</Link>
                    )
                }
            </nav>
            {
                isOpenMenu?
                    <div className={'md:hidden flex items-center cursor-pointer'}
                         onClick={() => setIsOpenMenu(prev => !prev)}
                    >
                        <AiOutlineClose />
                    </div>
                    :
                    <div className={'md:hidden flex items-center cursor-pointer'}
                         onClick={() => setIsOpenMenu(prev => !prev)}
                    >
                        <AiOutlineMenu />
                    </div>
            }
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