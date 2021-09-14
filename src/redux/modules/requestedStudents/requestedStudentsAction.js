import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getRequestedStudents=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_REQUESTED_STUDENT,
        payload:axios(httpRequest("enrolledStudent","GET"))
            // .get(`${link}/enrolledStudent`)
    })
}