import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getDashboard=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_DASHBOARD,
        payload:axios(httpRequest("client-student/dashboard"))
            // .get(`${link}/client-student/dashboard`)
    })
}