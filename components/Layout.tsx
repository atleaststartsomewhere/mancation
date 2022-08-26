import React, { ReactNode } from "react"
import Link from 'next/link'

interface LayoutProps {
    children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => (

    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <nav>
            <Link href="/" prefetch>Home</Link>
        </nav>
        {children}
    </main>

)