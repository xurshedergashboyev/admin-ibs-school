import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getTeachers=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_TEACHERS,
        payload:axios(httpRequest("teachers","GET"))
            // .get(`${link}/teachers`)
    })
}
