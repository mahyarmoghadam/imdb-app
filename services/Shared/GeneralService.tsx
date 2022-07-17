import axios from "axios";
import { generateUrl } from "../../config";


function Get<T>(url: string) {
    return axios.get<T>(generateUrl(url));
}

function Post<T>(url: string, data: any) {
    return axios.post<T>(generateUrl(url), data);
}

export { Get, Post };