import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getClientIdData = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.GET_CLIENT_ID_DATA,
        payload: axios(httpRequest(`client-student/${id}`,"GET"))
            // .get(`${link}/client-student/${id}`)
    })
}