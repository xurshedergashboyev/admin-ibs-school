import actionTypes from "../../../constants/actionTypes"

const defaultState={
    loading:false,
    error:false,
    dashboard:[]
}

const map = {
    [`${actionTypes.GET_DASHBOARD}${actionTypes.PENDING}`]:(state)=>({
        ...state,
        loading:true
    }),
    [`${actionTypes.GET_DASHBOARD}${actionTypes.FULFILLED}`]:(state,{payload})=>({
        ...state,
        loading:false,
        error:false,
        dashboard:payload.data
    }),
    [`${actionTypes.GET_DASHBOARD}${actionTypes.REJECTED}`]:(state)=>({
        ...state,
        loading:false,
        error:true
    })
}

export default function dashboardReducer(state=defaultState, action){
    return(map[action.type] && map[action.type](state, action)) || state;
}