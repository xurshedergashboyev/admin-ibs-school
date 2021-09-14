import actionTypes from "../../../constants/actionTypes"

const defaultState = {
    loading: false,
    error: false,
    lessonData: []
}

const map = {
    [`${actionTypes.GET_LESSON_DATA}${actionTypes.PENDING}`]: (state) => ({
        ...state,
        loading: true
    }),
    [`${actionTypes.GET_LESSON_DATA}${actionTypes.FULFILLED}`]: (state, {payload}) => ({
        ...state,
        loading: false,
        error: false,
        lessonData: payload.data
    }),
    [`${actionTypes.GET_LESSON_DATA}${actionTypes.REJECTED}`]: (state) => ({
        ...state,
        loading: false,
        error: true
    })
}

export default function lessonDataReducer(state = defaultState, action) {
    return (map[action.type] && map[action.type](state, action)) || state;
}