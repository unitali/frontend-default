import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
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

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    async function signIn() {
        const apiUrl = `${process.env.REACT_APP_API_URL}/login`;
        // if (apiUrl) {
        //     const response = await fetch(apiUrl, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     const responseData = await response.json();
        //     setLoading(false);

        //     if (response.ok) {
        //         console.log(responseData);
        //         localStorage.setItem('authToken', responseData.token);
        //         toast.success(responseData.message);
        //     } else {
        //         console.error(responseData);
        //         if (Array.isArray(responseData.message)) {
        //             responseData.message.forEach((message: string) => {
        //                 toast.error(modifiedMessage(message));
        //             });
        //         } else {
        //             toast.error(modifiedMessage(responseData.message));
        //         }
        //     }
        // } else {
        //     console.error('A variável REACT_APP_API_URL não está definida.');
        // }
    }



    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}