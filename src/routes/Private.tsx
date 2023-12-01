import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { routeWeb } from "../services/pathRoutes";

interface PrivateProps {
    children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) return <Navigate to={routeWeb.signIn} />

    return children
}