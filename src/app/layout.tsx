import './globals.css'
import type { Metadata } from 'next'
import { Nanum_Gothic } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {LAYOUT} from "@/constatns/layout";

export const metadata: Metadata = {
  title: 'Feth\'s blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" >
      <body className={'relative'}>
        <Header/>
        {/* header fixed 높이 */}
        <div className={`h-${LAYOUT.헤더높이}`}/>
        <main className={'flex items-center justify-center p-4'}>
          <div className={'container'}>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
