import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getLessonData = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_LESSON_DATA,
        payload: axios(httpRequest("lesson-data","GET"))
            // .get(`${link}/lesson-data`)
    })
}