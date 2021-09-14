import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    telegramFile:[]
}

const map = {
    [`${actionTypes.GET_TELEGRAM_FILE}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_TELEGRAM_FILE}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        telegramFile:payload.data
    }),
    [`${actionTypes.GET_TELEGRAM_FILE}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function telegramFileReducer(state=defaultState, action){
    return(map[action.type] && map[action.type](state, action)) || state;
}