import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getScheduledCourses=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_SCHEDULED_COURSE,
        payload:axios(httpRequest("scheduled-course","GET"))
            // .get(`${link}/scheduled-course`)
    })
}