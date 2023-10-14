import { api } from "../services/api"
import { destroyCookie, setCookie } from "nookies"
import { properties } from "../configs/properties"
import { createContext, ReactNode, useState } from "react";
import { routesApi, routesWeb } from "../services/routes";


type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    username: string;
}

type SignInProps = {
    username: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(undefined, properties.cookieToken);
        window.location.href = routesWeb.signIn;
    } catch (error) {
        console.log("ERRO DESLOGAR")
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    async function signIn(data: SignInProps) {
        try {
            const response = await api.post(routesApi.signIn, data);
            const { user, token } = response.data;

            setCookie(undefined, properties.cookieToken, token, {
                maxAge: 60 * 60,
                path: "/"
            })

            setUser({
                username: user.name,
                id: user.id,
                name: user.name
            })

            api.defaults.headers["Authorization"] = `Bearer ${token}`

            window.location.href = routesWeb.admin;

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}