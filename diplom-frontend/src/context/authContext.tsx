'use client'
import { createContext, FunctionComponent, useContext, useState } from "react"

interface AuthContext {
    token: string | undefined
    setToken: (value: string) => void
}

const authContext = createContext<AuthContext>({
    token: undefined,
    setToken: (value) => {
        console.log(value)
        throw new Error('setToken function must be overridden')
    }
})

interface Props {
    children: React.ReactNode
}

export const AuthProvider: FunctionComponent<Props> = ({ children }) => {
    const [token, setToken] = useState<string | undefined>(undefined)

    return (
        <authContext.Provider
            value={{
                token: token,
                setToken: setToken
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export const useAuth = (): AuthContext => {
    return useContext(authContext)
}