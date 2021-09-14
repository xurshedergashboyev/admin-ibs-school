import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    requestedStudent:[]
}

const map = {
    [`${actionTypes.GET_REQUESTED_STUDENT}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_REQUESTED_STUDENT}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        requestedStudent:payload.data
    }),
    [`${actionTypes.GET_REQUESTED_STUDENT}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function requestedStudentReducer(state=defaultState,action){
    return(map[action.type] && map[action.type](state, action)) || state;
}