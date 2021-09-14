import axios from "axios"
import actionTypes from "../../../constants/actionTypes"
import {link} from "../../../baseLink/link"
import {httpRequest} from "../../../util/httpRequest";

export const getTelegramFile = (level) => (dispatch) => {
    dispatch({
        type: actionTypes.GET_TELEGRAM_FILE,
        payload: axios(httpRequest(`telegram-file/level/${level}`,"GET"))
            // .get(`${link}/telegram-file/level/${level}`)
    })
}