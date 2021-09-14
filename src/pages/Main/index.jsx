import React, {useState, useEffect} from "react"
import {NavbarContainer, PageContainer, WrapperMain} from "./styles";
import LeftNavbar from "../../components/LeftNavbar";
import {Route} from "react-router-dom";
import StudentsPage from "../StudentsPage";
import TeachersPage from "../TeachersPage";
import DashboardPage from "../Dashboard";
import ImagesPage from "../ImagesPage";
import CoursesPage from "../CoursesPage";

//icons
import Dashboard from "../../assets/icons/dashboard.svg"
import Student from "../../assets/icons/student.svg"
import Unsure from "../../assets/icons/unknown.svg"
import Gift from "../../assets/icons/gift.svg"
import Tested from "../../assets/icons/correction.svg"
import Teacher from "../../assets/icons/teacher.svg"
import Course from "../../assets/icons/book.svg"
import Image from "../../assets/icons/image.svg"
import Add from "../../assets/icons/plus.svg"
import WaitingList from "../../assets/icons/waiting-list.svg"
import Clients from "../../assets/icons/clients.svg"
import ScheduledCourse from "../../assets/icons/scheduled-course.svg"
import Bot from "../../assets/icons/robot.svg"
import List from "../../assets/icons/list.svg"
import Content from "../../assets/icons/content.svg"



//hooks
import useWindowDimensions from "../../hooks/useWindowDimentions";
import ClientsPage from "../ClientsPage";
import ScheduledCoursePage from "../ScheduledCoursePage";
import BotPage from "../BotPage";


const Main = () => {

    const navs = [
        {
            name: "Dashboard",
            link: "/",
            icon: Dashboard,
            navs: [
                {
                    name: "Dashboard",
                    link: "/",
                    icon: Dashboard
                }
            ]
        },
        {
            name: "Students",
            link: "/students",
            icon: Student,
            navs: [
                {
                    name: "Req",
                    link: "/students/requested",
                    icon: Student
                },
                {
                    name: "Unsure",
                    link: "/students/undecided",
                    icon: Unsure
                },
                {
                    name: "Gift",
                    link: "/students/to-get-gift",
                    icon: Gift
                },
                {
                    name: "Test",
                    link: "/students/tested",
                    icon: Tested
                }, {
                    name: "Wait",
                    link: "/students/waiting-list",
                    icon: WaitingList
                },
            ]
        },
        {
            name: "Teachers",
            link: "/teachers",
            icon: Teacher,
            navs: [
                {
                    name: "Teachers",
                    link: "/teachers/list",
                    icon: Teacher
                },
                {
                    name: "Add",
                    link: "/teachers/add",
                    icon: Add
                }
            ]
        },
        {
            name: "Courses",
            link: "/courses",
            icon: Course,
            navs: [
                {
                    name: "Courses",
                    link: "/courses/list",
                    icon: Course
                },
                {
                    name: "Add",
                    link: "/courses/add",
                    icon: Add
                },
            ]
        },
        {
            name: "Images",
            link: "/images",
            icon: Image,
            navs: [
                {
                    name: "Images",
                    link: "/images/list",
                    icon: Image
                },
                {
                    name: "Add",
                    link: "/images/add",
                    icon: Add
                },
            ]
        }, {
            name: "Clients",
            link: "/clients",
            icon: Clients,
            navs: [
                {
                    name: "Clients",
                    link: "/clients/list",
                    icon: Clients
                },
                {
                    name: "Add",
                    link: "/clients/add",
                    icon: Add
                },
            ]
        }, {
            name: "Scheduled",
            link: "/scheduled-courses/list",
            icon: ScheduledCourse,
            navs: [
                {
                    name: "Scheduled",
                    link: "/scheduled-courses/list",
                    icon: ScheduledCourse
                },
                {
                    name: "Add",
                    link: "/scheduled-courses/add",
                    icon: Add
                },
            ]
        }, {
            name: "Bot",
            link: "/bot",
            icon: Bot,
            navs: [
                {
                    name: "Scheduled",
                    link: "/bot/lessons",
                    icon: List
                },
                {
                    name: "Add",
                    link: "/bot/content",
                    icon: Content
                },
            ]
        },
    ];

    const width = useWindowDimensions().width

    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        width > 1300 && setHidden(false)
    }, [])

    return (
        <WrapperMain>
            <NavbarContainer hide={hidden}>
                <LeftNavbar nav={navs} hidden={hidden} setHidden={() => setHidden(!hidden)}/>
            </NavbarContainer>
            <PageContainer hide={hidden} id={"admin-content"}>
                {/*<HideToggleIcon outside={true}><Arrow/></HideToggleIcon>*/}
                <Route exact path={"/"} component={DashboardPage}/>
                <Route path={"/students"} component={StudentsPage}/>
                <Route path={"/teachers"} component={TeachersPage}/>
                <Route path={"/courses"} component={CoursesPage}/>
                <Route path={"/images"} component={ImagesPage}/>
                <Route path={"/clients"} component={ClientsPage}/>
                <Route path={"/scheduled-courses"} component={ScheduledCoursePage}/>
                <Route path={"/bot"} component={BotPage}/>
            </PageContainer>
        </WrapperMain>
    )
}

export default Main