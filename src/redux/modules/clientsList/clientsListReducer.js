import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    clientsList:[]
}

const map = {
    [`${actionTypes.GET_CLIENTS_LIST}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_CLIENTS_LIST}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        clientsList:payload.data
    }),
    [`${actionTypes.GET_CLIENTS_LIST}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function clientsListReducer(state=defaultState, action){
    return(map[action.type] && map[action.type](state, action)) || state;
}