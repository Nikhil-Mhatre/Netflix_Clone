'use client'

import { SessionProvider } from "next-auth/react"

interface SessionProviderProps {
    children: React.ReactNode
}

const Session_Provider: React.FC<SessionProviderProps> = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default Session_Provider