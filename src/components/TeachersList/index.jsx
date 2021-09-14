import React, {useEffect, useState} from "react"
import {
    ActionBox, ActionsBox,
    BirthDate,
    Button,
    ButtonsBox,
    CardBox,
    CardImg, DateOfBirth, Day, DayMonth, Delete, DeletionBackground, DeletionImg, DeletionPage, DeletionText,
    Description, Edit,
    FullName, FullNameBox, FullNames,
    LangIn, Month,
    Position, TableImg, TableRow, TableWrapper,
    WrapperTeachersList, Year
} from "./styles";
// import img from "../../assets/images/firebird.png"
import {useDispatch, useSelector} from "react-redux";
import {getTeachers} from "../../redux/modules/teachers/teachersAction";
import {link} from "../../baseLink/link";
import axios from "axios";
import {useHistory} from "react-router";
import {whichMonth} from "../../util/whichMonth";

//icons
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg"
import {ReactComponent as DeleteIcon} from "../../assets/icons/bin.svg"
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg"
import PageTitleAdd from "../PageTitleAdd";
import {DisplayFlex} from "../CoursesList/styles";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import {httpRequest} from "../../util/httpRequest";


const TeachersList = ({setEditValue}) => {

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    const history = useHistory()

    const dispatch = useDispatch()

    const getTeachersDispatch = () => {
        dispatch(getTeachers())
    }

    useEffect(() => {
        getTeachersDispatch()
    }, [getTeachers])
    const teacher = useSelector(state => state.teacherReducer)

    const deleteTeacherById = (id) => {
        axios(httpRequest(`teachers/${id}`,"DELETE"))
            // .delete(`${link}/teachers/${id}`)
            .then(res => {
                // console.log("deleted")
                console.log(res)
                getTeachersDispatch()
                setDeletionData({popUp:false,data:{}})
            })
            .catch(err => {
                // console.log("error deleted")
                console.log(err)
            })

    }

    const {loading, error, teachers} = teacher
    return (
        <>
            <WrapperTeachersList>
                <PageTitleAdd title={"Teachers"} link={"/teachers/add"}/>
                {loading && <Loading/>}
                {error && <ErrorBox/>}
                <TableWrapper>
                    {(!loading && !error) &&
                    teachers?.map(({
                                       id,
                                       teacherFullName,
                                       birthDate,
                                       description,
                                       image,
                                       position
                                   }, index) => {
                            const dob = birthDate.split("T")[0].split("-");
                            const day = dob[2];
                            const month = whichMonth(dob[1]);
                            const year = dob[0];
                            return (
                                <TableRow key={id}>
                                    <TableImg>
                                        <img src={`${link}/images/files/${image}`} alt=""/>
                                    </TableImg>
                                    <FullNameBox>
                                        <FullName>
                                            {teacherFullName}
                                        </FullName>
                                        <Position>
                                            {position}
                                        </Position>
                                    </FullNameBox>
                                    <DateOfBirth>
                                        <DayMonth>
                                            <Day>{day}</Day>
                                            <Month>{month}</Month>
                                        </DayMonth>
                                        <Year>{year}</Year>
                                    </DateOfBirth>

                                    <ActionBox>
                                        <Edit bgColor={"green"} onClick={() => {
                                            history.push("/teachers/add")
                                            setEditValue({
                                                id,
                                                teacherFullName,
                                                birthDate,
                                                description,
                                                image,
                                                position
                                            })
                                        }}>
                                            <EditIcon/>
                                        </Edit>
                                        <Delete bgColor={"red"} onClick={() =>
                                            setDeletionData({
                                                popUp: true,
                                                data: {
                                                    id,
                                                    teacherFullName,
                                                    birthDate,
                                                    description,
                                                    image,
                                                    position
                                                }
                                            })}>
                                            <DeleteIcon/>
                                        </Delete>
                                    </ActionBox>

                                    {/*</CardBox>*/}
                                </TableRow>)
                        }
                    )
                    }
                </TableWrapper>
            </WrapperTeachersList>
            {deletionData.popUp &&
            <DeletionBackground>
                <DeletionPage>
                    <DeletionImg>
                        <img src={`${link}/images/files/${deletionData.data?.image}`} alt=""/>
                    </DeletionImg>
                    <DeletionText>
                        {deletionData.data?.teacherFullName}
                        <br/>
                        <small>{deletionData.data?.position}</small>
                    </DeletionText>
                    <DeletionText>Do you really want to delete me 😭</DeletionText>
                    <ActionsBox>
                        <Edit bgColor={"green"} onClick={() => {
                            setDeletionData({popUp: false, data: {}})
                        }}>
                            <ArrowIcon/>
                        </Edit>
                        <Delete bgColor={"red"} onClick={() =>
                            deleteTeacherById(deletionData.data?.id)
                        }>
                            <DeleteIcon/>
                        </Delete>
                    </ActionsBox>
                </DeletionPage>
            </DeletionBackground>}
        </>
    )
}

export default TeachersList