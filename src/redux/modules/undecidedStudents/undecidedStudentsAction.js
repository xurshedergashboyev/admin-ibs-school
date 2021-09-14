import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getUndecidedStudents=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_UNDECIDED_STUDENT,
        payload:axios(httpRequest("undecidedStudent","GET"))
            // .get(`${link}/undecidedStudent`)
    })
}