import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    students:[]
}

const map = {
    [`${actionTypes.GET_UNDECIDED_STUDENT}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_UNDECIDED_STUDENT}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        students:payload.data
    }),
    [`${actionTypes.GET_UNDECIDED_STUDENT}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function undecidedStudentsReducer(state=defaultState,action){
    return(map[action.type] && map[action.type](state, action)) || state;
}