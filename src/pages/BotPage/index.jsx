import React, {useEffect} from 'react';
import PageNavbar from "../../components/PageNavbar";
import {Route} from "react-router-dom";
import TeachersList from "../../components/TeachersList";
import AddTeacher from "../../components/AddTeacher";
import BotLesson from "../../components/BotLesson";
import BotContent from "../../components/BotContent";
import {useDispatch} from "react-redux";
import {getTelegramFile} from "../../redux/modules/telegramFile/telegramFileAction";
import {getLessonData} from "../../redux/modules/lessonData/lessonDataAction";

const BotPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTelegramFile())
        dispatch(getLessonData())
    }, [])

    const navs = [
        {
            name: "Lessons",
            link: "/bot/lessons"
        },
        {
            name: "Content",
            link: "/bot/content"
        }
    ]

    return (
        <>
            <PageNavbar navs={navs}/>
            <Route path={"/bot/lessons"}>
                <BotLesson/>
            </Route>
            <Route path={"/bot/content"}>
                <BotContent/>
            </Route>
        </>
    );
}

export default BotPage;