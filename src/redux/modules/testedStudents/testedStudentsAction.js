import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getTestedStudents=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_TESTED_STUDENT,
        payload:axios(httpRequest("tested-student","GET"))
            // .get(`${link}/tested-student`)
    })
}