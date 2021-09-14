import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getClientsList=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_CLIENTS_LIST,
        payload:axios(httpRequest("client-student","GET"))
            // .get(`${link}/client-student`)
    })
}