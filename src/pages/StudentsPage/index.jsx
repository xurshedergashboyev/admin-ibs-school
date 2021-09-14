import React, {useEffect, useState} from "react"
import {Route} from "react-router-dom";
import PageNavbar from "../../components/PageNavbar";
import RequestedStudent from "../../components/RequestedStudent";
import UndecidedStudent from "../../components/UndecidedStudent";
import ToGetGiftStudent from "../../components/ToGetGiftStudent";
import TestedStudent from "../../components/TestedStudent";
import {useDispatch} from "react-redux";
import {getRequestedStudents} from "../../redux/modules/requestedStudents/requestedStudentsAction";
import {getTestedStudents} from "../../redux/modules/testedStudents/testedStudentsAction";
import {getUndecidedStudents} from "../../redux/modules/undecidedStudents/undecidedStudentsAction";
import {getToGetGiftStudents} from "../../redux/modules/toGetGiftStudents/toGetGiftStudentsAction";
import WaitingList from "../../components/WaitingList";
import {getWaitingList} from "../../redux/modules/waitingList/waitingListAction";

const StudentsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRequestedStudents())
        dispatch(getTestedStudents())
        dispatch(getUndecidedStudents())
        dispatch(getToGetGiftStudents())
        dispatch(getWaitingList())
    }, [])

    const navs = [
        {
            name: "Req",
            link: "/students/requested"
        },
        {
            name: "Unsure",
            link: "/students/undecided"
        },
        {
            name: "Gift",
            link: "/students/to-get-gift"
        },
        {
            name: "Test",
            link: "/students/tested"
        },
        {
            name: "Wait",
            link: "/students/waiting-list"
        },
    ]

    const [waitData, setWaitData] = useState({})

    return (
        <>
            <PageNavbar navs={navs}/>

            <Route path={"/students/requested"}>
                <RequestedStudent setWaitData={setWaitData}/>
            </Route>
            <Route path={"/students/undecided"}>
                <UndecidedStudent setWaitData={setWaitData}/>
            </Route>
            <Route path={"/students/to-get-gift"}>
                <ToGetGiftStudent setWaitData={setWaitData}/>
            </Route>
            <Route path={"/students/tested"}>
                <TestedStudent setWaitData={setWaitData}/>
            </Route>
            <Route path={"/students/waiting-list"}>
                <WaitingList waitData={waitData}/>
            </Route>

        </>
    )
}

export default StudentsPage