import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    teachers:[]
}

const map = {
    [`${actionTypes.GET_TEACHERS}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true,
    }),
    [`${actionTypes.GET_TEACHERS}${actionTypes.FULFILLED}`]:(state, {payload})=>({
        ...state,
        loading:false,
        error:false,
        teachers:payload.data
    }),
    [`${actionTypes.GET_TEACHERS}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function teacherReducer(state = defaultState, action) {
    return (map[action.type] && map[action.type](state, action)) || state;
};