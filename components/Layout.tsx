import React, { ReactNode } from "react"
import Link from 'next/link'

interface LayoutProps {
    children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => (

    <div id="layout">

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            {/* <nav>
                <Link href="/" prefetch>Home</Link>
            </nav> */}
            {children}
            

        </main>    

        <footer className="flex h-24 w-full items-center justify-center">
        {/* <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a> */}
        </footer>
    </div>
)