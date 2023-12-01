const uri = process.env.REACT_APP_API_URL;

export const routeApi = {
    signIn: uri + "/login",
    signUp: uri + "/register",

}

export const routeWeb = {
    home: "/",
    signIn: "/sign-in",
    signUp: "/sign-up",
    admin: "/admin",
}