import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getWaitingList = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_WAITING_LIST,
        payload: axios(httpRequest("waiting-list", "GET"))
        // .get(`${link}/waiting-list`)
    })
}