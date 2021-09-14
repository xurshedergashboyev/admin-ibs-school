import {combineReducers} from 'redux';
import teacherReducer from "../modules/teachers/teachersReducer";
import coursesReducer from "../modules/courses/coursesReducer";
import requestedStudentReducer from "../modules/requestedStudents/requestedStudentsReducer";
import testedStudentReducer from "../modules/testedStudents/testedStudentsReducer";
import toGetGiftReducer from "../modules/toGetGiftStudents/toGetGiftStudentsReducer";
import undecidedStudentsReducer from "../modules/undecidedStudents/undecidedStudentsReducer";
import waitingListReducer from "../modules/waitingList/waitingListReducer";
import clientsListReducer from "../modules/clientsList/clientsListReducer";
import clientIdDataReducer from "../modules/clientIdData/clientIdDataReducer";
import scheduledCoursesReducer from "../modules/scheduledCourses/scheduledCoursesReducer";
import dashboardReducer from "../modules/dashboard/dashboardReducer";
import telegramFileReducer from "../modules/telegramFile/telegramFileReducer";
import lessonDataReducer from "../modules/lessonData/lessonDataReducer";

const reducer = combineReducers({
    teacherReducer,
    coursesReducer,
    requestedStudentReducer,
    testedStudentReducer,
    toGetGiftReducer,
    undecidedStudentsReducer,
    waitingListReducer,
    clientsListReducer,
    clientIdDataReducer,
    scheduledCoursesReducer,
    dashboardReducer,
    telegramFileReducer,
    lessonDataReducer
});

export default reducer;