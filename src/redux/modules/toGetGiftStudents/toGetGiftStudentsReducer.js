import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    toGetGift:[]
}

const map = {
    [`${actionTypes.GET_TO_GET_GIFT_STUDENT}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_TO_GET_GIFT_STUDENT}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        toGetGift:payload.data
    }),
    [`${actionTypes.GET_TO_GET_GIFT_STUDENT}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function toGetGiftReducer(state=defaultState,action){
    return(map[action.type] && map[action.type](state, action)) || state;
}