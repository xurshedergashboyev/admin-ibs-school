import axios from "axios";
import {getHeader} from "./getHeader";
import {link as backendLink} from "../baseLink/link";

export const httpRequest = (link, method, data) => {
    return ({
        method: method,
        headers: getHeader(),
        data: data,
        url: `${backendLink}/${link}`
    })
}