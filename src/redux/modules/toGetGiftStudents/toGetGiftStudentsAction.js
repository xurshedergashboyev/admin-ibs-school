import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getToGetGiftStudents = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_TO_GET_GIFT_STUDENT,
        payload: axios(httpRequest(`toGetGift`, "GET"))
        // .get(`${link}/toGetGift`)
    })
}