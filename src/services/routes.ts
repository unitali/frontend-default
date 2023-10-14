const uri = process.env.REACT_APP_API_URL;

export const routesApi = {
    signIn: uri + "/login",
    signUp: uri + "/register",

}

export const routesWeb = {
    home: "/",
    signIn: "/sign-in",
    signUp: "/sign-up",
    admin: "/admin",
}