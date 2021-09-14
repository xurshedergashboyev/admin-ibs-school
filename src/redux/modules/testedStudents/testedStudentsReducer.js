import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    testedStudent:[]
}

const map = {
    [`${actionTypes.GET_TESTED_STUDENT}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_TESTED_STUDENT}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        testedStudent:payload.data
    }),
    [`${actionTypes.GET_TESTED_STUDENT}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function testedStudentReducer(state=defaultState,action){
    return(map[action.type] && map[action.type](state, action)) || state;
}