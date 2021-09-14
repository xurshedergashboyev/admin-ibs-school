import React, {Component, useEffect} from 'react';
import {Route} from "react-router-dom";
import PageNavbar from "../../components/PageNavbar";
import AddScheduledCourse from "../../components/AddScheduledCourse";
import ScheduledCourseList from "../../components/ScheduledCourseList";
import {useDispatch} from "react-redux";
import {getScheduledCourses} from "../../redux/modules/scheduledCourses/scheduledCoursesAction";

const ScheduledCoursePage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getScheduledCourses())
    }, [getScheduledCourses])

    const navs = [
        {
            name: "List",
            link: "/scheduled-courses/list"
        },
        {
            name: "Add",
            link: "/scheduled-courses/add"
        },
    ]

    return (
        <>
            <PageNavbar navs={navs}/>
            <Route path={"/scheduled-courses/add"}>
                <AddScheduledCourse/>
            </Route>
            <Route path={"/scheduled-courses/list"}>
                <ScheduledCourseList/>
            </Route>
        </>
    );
}

export default ScheduledCoursePage;