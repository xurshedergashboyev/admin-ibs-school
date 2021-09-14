import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getCourses=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_COURSES,
        payload:axios(httpRequest("courses","GET"))
            // .get(`${link}/courses`)
    })
}