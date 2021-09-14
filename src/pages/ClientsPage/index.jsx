import React, {useEffect, useState} from "react"
import {Route} from "react-router-dom";
import PageNavbar from "../../components/PageNavbar";
import RequestedStudent from "../../components/RequestedStudent";
import UndecidedStudent from "../../components/UndecidedStudent";
import ToGetGiftStudent from "../../components/ToGetGiftStudent";
import TestedStudent from "../../components/TestedStudent";
import {useDispatch, useSelector} from "react-redux";
import {getRequestedStudents} from "../../redux/modules/requestedStudents/requestedStudentsAction";
import {getTestedStudents} from "../../redux/modules/testedStudents/testedStudentsAction";
import {getUndecidedStudents} from "../../redux/modules/undecidedStudents/undecidedStudentsAction";
import {getToGetGiftStudents} from "../../redux/modules/toGetGiftStudents/toGetGiftStudentsAction";
import WaitingList from "../../components/WaitingList";
import {getWaitingList} from "../../redux/modules/waitingList/waitingListAction";
import ClientsList from "../../components/ClientsList";
import AddClient from "../../components/AddClient";
import PersonalCabinet from "../PersonalCabinet";

const ClientsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(getRequestedStudents())
        // dispatch(getTestedStudents())
        // dispatch(getUndecidedStudents())
        // dispatch(getToGetGiftStudents())
        // dispatch(getWaitingList())
    }, [])

    const navs = [
        {
            name: "List",
            link: "/clients/list"
        },
        {
            name: "Add",
            link: "/clients/add"
        }
    ]

    const [id, setId] = useState()

    useEffect(() => {
        console.log(id)
    }, [id])

    // const clientId = useSelector(state => state.clientIdReducer);

    return (
        <>
            <PageNavbar navs={navs}/>

            <Route path={"/clients/list"}>
                <ClientsList setId={setId}/>
            </Route>
            <Route path={"/clients/add"}>
                <AddClient/>
            </Route>
            <Route path={`/clients/id/:id`}>
                <PersonalCabinet/>
            </Route>
        </>
    )
}

export default ClientsPage