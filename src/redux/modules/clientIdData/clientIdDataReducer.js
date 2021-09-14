import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    clientData:[]
}

const map = {
    [`${actionTypes.GET_CLIENT_ID_DATA}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_CLIENT_ID_DATA}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        clientData:payload.data
    }),
    [`${actionTypes.GET_CLIENT_ID_DATA}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function clientIdDataReducer(state=defaultState, action){
    return(map[action.type] && map[action.type](state, action)) || state;
}