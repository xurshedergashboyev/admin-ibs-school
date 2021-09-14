import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    waitingList:[]
}

const map = {
    [`${actionTypes.GET_WAITING_LIST}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_WAITING_LIST}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        waitingList:payload.data
    }),
    [`${actionTypes.GET_WAITING_LIST}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function waitingListReducer(state=defaultState,action){
    return(map[action.type] && map[action.type](state, action)) || state;
}