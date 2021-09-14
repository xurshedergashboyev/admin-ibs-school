import React, {useState, useEffect} from "react"
import {
    ActionBox, ActionsBox,
    Category,
    CategoryCourseName,
    CourseName,
    Delete, DeletionBackground, DeletionImg, DeletionPage, DeletionText,
    Description,
    DescriptionBox,
    DisplayFlex,
    Edit,
    Number,
    Numbers,
    TableRow,
    TableWrapper, TeacherFullName,
    WrapperCoursesList
} from "./styles";
// import img from "../../assets/images/firebird.png"
import {useDispatch, useSelector} from "react-redux"

import {useHistory} from "react-router";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";
import PageTitleAdd from "../PageTitleAdd";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import {getScheduledCourses} from "../../redux/modules/scheduledCourses/scheduledCoursesAction";
//icon
import {ReactComponent as Bin} from "../../assets/icons/bin.svg";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";
import {link} from "../../baseLink/link";
import axios from "axios";
import {DeleteBox} from "../ClientsList/styles";
import {httpRequest} from "../../util/httpRequest";

function ScheduledCourseList({setEditValue}) {

    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getScheduledCourses())
    // }, [getScheduledCourses])
    const scheduledCourse = useSelector(state => state.scheduledCoursesReducer)
    const {loading, error, courses} = scheduledCourse

    // const [deleteProcess, setDeleteProcess] = useState({loading: false, error: false, success: false})

    const deleteCourse = (id) => {
        // setDeleteProcess({loading: true, error: false, success: false})
        axios(httpRequest(`scheduled-course/${id}`,"DELETE"))
            // .delete(`${link}/scheduled-course/${id}`)
            .then(res => {
                console.log(res)
                setDeletionData({popUp: false, data: {}})
                dispatch(getScheduledCourses())
                // setDeleteProcess({loading: false, error: false, success: true})
            })
            .catch(err => {
                console.log(err)
                // setDeleteProcess({loading: false, error: true, success: false})
            })
    }

    // const history = useHistory()
    //
    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})
    //

    return (
        <>
            <PageTitleAdd title={"Scheduled Courses"} link={"/scheduled-courses/add"}/>

            <WrapperCoursesList>
                <h1>
                    {loading && <Loading/>}
                    {error && <ErrorBox/>}
                </h1>

                <TableWrapper>
                    {(!loading && !error) &&
                    courses?.map(
                        (
                            {
                                id,
                                courseName,
                                finished,
                                finishTime,
                                teacher,
                                format,
                                days,
                                type
                            }) =>
                            <TableRow key={id}>
                                <DeleteBox onClick={() => {
                                    setDeletionData({popUp: true, data: {id, courseName, format, type}})
                                    // handleDelete(id)
                                }} className={"bin"}>
                                    <Bin/>
                                </DeleteBox>
                                {/*<TableImg>*/}
                                {/*    <img src={`${link}/images/files/${courseIcon}`} alt=""/>*/}
                                {/*</TableImg>*/}

                                <CategoryCourseName>
                                    <DisplayFlex>
                                        <CourseName>
                                            {/*<LangIn>uz</LangIn>*/}
                                            {courseName}
                                        </CourseName>
                                        {/*<CourseName>*/}
                                        {/*    <LangIn>ru</LangIn>*/}
                                        {/*    {courseName_ru}*/}
                                        {/*</CourseName>*/}
                                    </DisplayFlex>
                                    <Category>
                                        {`${type.courseName} | ${type.category.categoryName}`}
                                    </Category>
                                </CategoryCourseName>
                                <DescriptionBox>
                                    <Description>
                                        <TeacherFullName>
                                            {teacher.teacherFullName}
                                        </TeacherFullName>
                                        {/*<LangIn>uz</LangIn>*/}
                                        {/*{description_uz}*/}
                                    </Description>
                                    {/*<Description>*/}
                                    {/*    <LangIn>ru</LangIn>*/}
                                    {/*    {description_ru}*/}
                                    {/*</Description>*/}
                                </DescriptionBox>
                                {/*<HashTags>*/}
                                {/*    {tags}*/}
                                {/*</HashTags>*/}
                                <Numbers>
                                    {/*{discount > 0 && <Number>-{discount}%</Number>}*/}
                                    <Number>{days.length} months</Number>
                                </Numbers>
                                <ActionBox>
                                    {/*<Edit bgColor={"green"} onClick={() => {*/}
                                    {/*    history.push("/courses/add")*/}
                                    {/*    setEditValue({*/}
                                    {/*        id,*/}
                                    {/*        courseName_uz,*/}
                                    {/*        courseName_ru,*/}
                                    {/*        description_uz,*/}
                                    {/*        description_ru,*/}
                                    {/*        category,*/}
                                    {/*        subCategory,*/}
                                    {/*        tags,*/}
                                    {/*        duration,*/}
                                    {/*        discount,*/}
                                    {/*        courseIcon*/}
                                    {/*    })*/}
                                    {/*}}*/}
                                    {/*>*/}
                                    {/*    <EditIcon/>*/}
                                    {/*</Edit>*/}
                                    {/*<Delete bgColor={"red"}*/}
                                    {/*    // onClick={() => setDeletionData({*/}
                                    {/*    //     popUp: true,*/}
                                    {/*    //     data: {id, courseName_uz, category, subCategory, courseIcon}*/}
                                    {/*    // })}*/}
                                    {/*>*/}
                                    {/*    /!*{*!/*/}
                                    {/*    /!*    deleteProcess.loading ? "loading..." :*!/*/}
                                    {/*    /!*        deleteProcess.error ? "error" :*!/*/}
                                    {/*    /!*            deleteProcess.success ? "success" :*!/*/}
                                    {/*    /!*                <DeleteIcon/>*!/*/}
                                    {/*    /!*}*!/*/}
                                    {/*</Delete>*/}
                                    {format.formatName}
                                </ActionBox>
                            </TableRow>
                    )}
                </TableWrapper>
            </WrapperCoursesList>
            {deletionData.popUp &&
            <DeletionBackground>
                <DeletionPage>
                    <DeletionText>
                        {deletionData.data?.courseName} <br/>
                        <small>{`${deletionData.data?.type.courseName} | ${deletionData.data?.type.category.categoryName}`}</small>
                    </DeletionText> <br/>
                    <DeletionText>Do you really want to delete this course ?</DeletionText>
                    <ActionsBox>
                        <Edit onClick={() => setDeletionData({popUp: false, data: {}})}>
                            <ArrowIcon/>
                        </Edit>
                        <Delete onClick={() => deleteCourse(deletionData.data?.id)}>
                            <Bin/>
                        </Delete>
                    </ActionsBox>
                </DeletionPage>
            </DeletionBackground>
            }
        </>
    )
}

export default ScheduledCourseList