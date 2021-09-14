import React, {useEffect, useState} from "react"
import {
    ActionsBox,
    BirthDate, Button, ButtonsBox,
    CardBox,
    CardImg,
    Category, CategoryCourseName,
    CourseName, DeletionBackground, DeletionImg, DeletionPage, DeletionText,
    Description, DescriptionBox,
    DisplayFlex,
    HashTags,
    LangIn, Number, Numbers, TableImg, TableRow, TableWrapper,
    WrapperCoursesList
} from "./styles";
// import img from "../../assets/images/firebird.png"
import {useDispatch} from "react-redux"
import {getCourses} from "../../redux/modules/courses/coursesAction";
import {useSelector} from "react-redux";
import {link} from "../../baseLink/link";
import axios from "axios";

import {useHistory} from "react-router";
import {ActionBox, Delete, Edit} from "./styles";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";
import {ReactComponent as DeleteIcon} from "../../assets/icons/bin.svg";
import {Add, NavbarBox, PageTitle} from "./styles";
import {ReactComponent as PlusIcon} from "../../assets/icons/plus-img.svg";
import PageTitleAdd from "../PageTitleAdd";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import {httpRequest} from "../../util/httpRequest";

function CoursesList({setEditValue}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourses())
    }, [getCourses])
    const course = useSelector(state => state.coursesReducer)

    const [deleteProcess, setDeleteProcess] = useState({loading: false, error: false, success: false})

    const deleteCourse = (id) => {
        setDeleteProcess({loading: true, error: false, success: false})
        axios(httpRequest(`courses/${id}`,"DELETE"))
            // .delete(`${link}/courses/${id}`)
            .then(res => {
                console.log(res)
                setDeleteProcess({loading: false, error: false, success: true})
            })
            .catch(err => {
                console.log(err)
                setDeleteProcess({loading: false, error: true, success: false})
            })
            .finally(res => {
                console.log(res)
                setTimeout(() => setDeleteProcess({loading: false, error: false, success: false}), 3000)
            })
    }

    const history = useHistory()

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    const {loading, error, courses} = course

    return (
        <>
            <PageTitleAdd title={"Courses"} link={"/courses/add"}/>

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
                                courseName_uz,
                                courseName_ru,
                                description_uz,
                                description_ru,
                                category,
                                subCategory,
                                tags,
                                duration,
                                discount,
                                courseIcon
                            }) =>
                            <TableRow key={id}>
                                <TableImg>
                                    <img src={`${link}/images/files/${courseIcon}`} alt=""/>
                                </TableImg>

                                <CategoryCourseName>
                                    <DisplayFlex>
                                        <CourseName>
                                            {/*<LangIn>uz</LangIn>*/}
                                            {courseName_uz}
                                        </CourseName>
                                        {/*<CourseName>*/}
                                        {/*    <LangIn>ru</LangIn>*/}
                                        {/*    {courseName_ru}*/}
                                        {/*</CourseName>*/}
                                    </DisplayFlex>
                                    <Category>
                                        {`${category} | ${subCategory}`}
                                    </Category>
                                </CategoryCourseName>
                                <DescriptionBox>
                                    <Description>
                                        {/*<LangIn>uz</LangIn>*/}
                                        {description_uz}
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
                                    {discount > 0 && <Number>-{discount}%</Number>}
                                    <Number>{duration} {duration === 1 ? "month" : "months"}</Number>
                                </Numbers>
                                <ActionBox>
                                    <Edit bgColor={"green"} onClick={() => {
                                        history.push("/courses/add")
                                        setEditValue({
                                            id,
                                            courseName_uz,
                                            courseName_ru,
                                            description_uz,
                                            description_ru,
                                            category,
                                            subCategory,
                                            tags,
                                            duration,
                                            discount,
                                            courseIcon
                                        })
                                    }}
                                    >
                                        <EditIcon/>
                                    </Edit>
                                    <Delete bgColor={"red"} onClick={() => setDeletionData({
                                        popUp: true,
                                        data: {id, courseName_uz, category, subCategory, courseIcon}
                                    })}>
                                        {
                                            deleteProcess.loading ? "loading..." :
                                                deleteProcess.error ? "error" :
                                                    deleteProcess.success ? "success" :
                                                        <DeleteIcon/>
                                        }
                                    </Delete>
                                </ActionBox>
                            </TableRow>
                    )}
                </TableWrapper>
            </WrapperCoursesList>
            {deletionData.popUp &&
            <DeletionBackground>
                <DeletionPage>
                    <DeletionImg>
                        <img src={`${link}/images/files/${deletionData.data?.courseIcon}`} alt=""/>
                    </DeletionImg>
                    <DeletionText>
                        {deletionData.data?.courseName_uz} <br/>
                        <small>{`${deletionData.data?.category} | ${deletionData.data?.subCategory}`}</small>
                    </DeletionText> <br/>
                    <DeletionText>Do you really want to delete this course ?</DeletionText>
                    <ActionsBox>
                        <Edit onClick={() => setDeletionData({popUp: false, data: {}})}>
                            <ArrowIcon/>
                        </Edit>
                        <Delete onClick={() => deleteCourse(deletionData.data?.id)}>
                            <DeleteIcon/>
                        </Delete>
                    </ActionsBox>
                </DeletionPage>
            </DeletionBackground>
            }
        </>
    )
}

export default CoursesList