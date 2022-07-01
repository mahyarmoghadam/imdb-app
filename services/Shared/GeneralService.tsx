import axios from "axios";
import { generateUrl } from "../../config";


function Get<T>(url: string) {
    return axios.get<T>(generateUrl(url));
}


export { Get };