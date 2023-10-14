import axios, { AxiosError } from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { properties } from "../configs/properties"
import { toast } from 'react-toastify';


export function setupAPIClient(context = undefined) {
    let cookies = parseCookies(context);
    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            Authorization: `Bearer ${cookies[properties.cookieToken]}`
        }
    })
    api.interceptors.response.use(res => {
        toast.success(res.data.message);
        console.log(res.data)
        return res;
    }, (error: AxiosError) => {
        destroyCookie(undefined, properties.cookieToken);
        toast.error((error.response?.data as any).message);
        return Promise.reject(error.response?.data);
    })
    return api;
}

export const api = setupAPIClient();