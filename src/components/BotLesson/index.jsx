import React, {useState, useEffect} from 'react';
import {Button, Form, Input, PhoneNumberFormat, Select, Textarea, Title} from "../Input/styles";
import {
    ContactBox,
    Course,
    Date, Description, EditBox,
    FullName,
    FullNameBox, LessonName, LessonTitle, Level,
    PhoneNumber,
    Queue,
    TableRow,
    TableWrapper,
    Telegram
} from "./styles";
import {whichMonth} from "../../util/whichMonth";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import NumberFormat from "react-number-format";
import axios from "axios";
import {link} from "../../baseLink/link";
import {getWaitingList} from "../../redux/modules/waitingList/waitingListAction";
import {getTestedStudents} from "../../redux/modules/testedStudents/testedStudentsAction";
import {ReactComponent as DeleteIcon, ReactComponent as Bin} from "../../assets/icons/bin.svg";
import {DeleteBox} from "../Table/styles";
import {ActionsBox, Delete, DeletionBackground, DeletionPage, DeletionText, Edit} from "../TeachersList/styles";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";
import {getLessonData} from "../../redux/modules/lessonData/lessonDataAction";
import Levels from "../../constants/levels"
import {httpRequest} from "../../util/httpRequest";

const BotLesson = () => {

    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})
    const [editingProcess, setEditingProcess] = useState({loading: false, error: false, success: false})

    const [editData, setEditData] = useState({edit: false, data: {}})

    const dispatch = useDispatch()

    const submitList = (e) => {
        e.preventDefault()
        setSubmissionProcess({loading: true, error: false, success: false})
        const {queue, lessonName, title, description, level} = e.target

        const form = {
            queue: queue.value,
            lessonName: lessonName.value,
            title: title.value,
            description: description.value,
            level: level.value
        }

        axios(httpRequest(`lesson-data`, "POST", form))
            // .post(`${link}/lesson-data`, form)
            .then(res => {
                setSubmissionProcess({loading: false, error: false, success: true})
                console.log(res)
                dispatch(getLessonData())
            })
            .catch(err => {
                setSubmissionProcess({loading: false, error: true, success: false})
            })
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 5000)
            })
    }

    const editList = (e) => {
        e.preventDefault();
        setEditingProcess({loading: true, error: false, success: false})
        const {queue, lessonName, title, description, level} = e.target

        const form = {
            id: editData.data.id,
            queue: queue.value,
            lessonName: lessonName.value,
            title: title.value,
            description: description.value,
            level: level.value
        }
        console.log(editData)

        axios(httpRequest(`lesson-data/${editData.data.id}`, "PUT", form))
            // .put(`${link}/lesson-data/${editData.data.id}`, form)
            .then(res => {
                setEditingProcess({loading: false, error: false, success: true})
                console.log(res)
                dispatch(getLessonData())
            })
            .catch(err => {
                setEditingProcess({loading: false, error: true, success: false})
            })
            .finally(() => {
                setTimeout(() => setEditingProcess({loading: false, error: false, success: false}), 5000)
            })

    }

    const list = useSelector(state => state.lessonDataReducer)

    const {loading, error, lessonData} = list

    const handleDelete = (id) => {
        axios.delete(`${link}/lesson-data/${id}`)
            .then(() => {
                    setDeletionData({popUp: false, data: {}})
                    dispatch(getLessonData())
                }
            )
    }

    useEffect(() => {
        getLessonData()
    }, [])

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    return (
        <>
            <div>
                <Form onSubmit={editData.edit ? editList : submitList}>
                    <Title onClick={() => setEditData({edit: false, data: {}})}>Lesson</Title>
                    <Input type="number" placeholder="queue" name="queue"
                           defaultValue={editData.edit ? editData.data.queue : ""}
                           required/>
                    <Input type="text" placeholder="lessonName" name="lessonName"
                           defaultValue={editData.edit ? editData.data.lessonName : ""}
                           required/>
                    <Input type="text" placeholder="title" name="title"
                           defaultValue={editData.edit ? editData.data.title : ""}
                           required/>
                    <Textarea style={{resize: "none"}} rows={4} placeholder="description" name="description"
                              defaultValue={editData.edit ? editData.data.description : ""}
                              required/>

                    <Select name="level"
                            defaultValue={editData.edit ? editData.data.level : ""}
                    >
                        <option value={Levels.kids}>Kids</option>
                        <option value={Levels.beginner}>Beginner</option>
                        <option value={Levels.elementary}>Elementary</option>
                        <option value={Levels.pre}>Pre-Intermediate</option>
                        <option value={Levels.inter}>Intermediate</option>
                        <option value={Levels.upper}>Upper-Intermediate</option>
                        <option value={Levels.ielts}>IELTS</option>
                    </Select>
                    <Button disabled={submissionProcess.loading || submissionProcess.error || submissionProcess.success}
                            loading={submissionProcess.loading} error={submissionProcess.error}
                            success={submissionProcess.success}>
                        {
                            submissionProcess.loading ? "loading..." :
                                submissionProcess.error ? "error" :
                                    submissionProcess.success ? "success" : (editData.edit ? "Edit" : "Submit")
                        }

                    </Button>
                </Form>

                {loading && <Loading/>}
                {error && <ErrorBox/>}
                <TableWrapper>
                    {(!loading && !error) &&
                    lessonData.map(({id, queue, lessonName, title, description, level}) =>
                        <TableRow key={id}>
                            <DeleteBox onClick={() => {
                                setDeletionData({popUp: true, data: {id, queue, lessonName, title, description, level}})
                                // handleDelete(id)
                            }} className={"bin"}>
                                <Bin/>
                            </DeleteBox>

                            <Queue>
                                {queue}
                            </Queue>
                            <LessonName>
                                {lessonName}
                            </LessonName>

                            <LessonTitle>
                                {title}
                            </LessonTitle>

                            <Description>
                                {description}
                            </Description>

                            <Level>
                                {level}
                            </Level>
                            <EditBox>
                                <Edit style={{margin: "auto"}} onClick={() => {
                                    setEditData({
                                        edit: true,
                                        data: {id, queue, lessonName, title, description, level}
                                    });
                                    document.getElementById("admin-content").scrollTo({top: 0, behavior: "smooth"});
                                }}>
                                    <EditIcon/>

                                </Edit>
                            </EditBox>
                        </TableRow>
                    )}
                </TableWrapper>
            </div>
            {deletionData.popUp &&
            <DeletionBackground>
                <DeletionPage>
                    <DeletionText>
                        {deletionData.data?.fullName}
                        <br/>
                        <small>{deletionData.data?.phoneNumber}</small>
                    </DeletionText>
                    <DeletionText>Do you really want to delete me 😭</DeletionText>
                    <ActionsBox>
                        <Edit bgColor={"green"} onClick={() => {
                            setDeletionData({popUp: false, data: {}})
                        }}>
                            <ArrowIcon/>
                        </Edit>
                        <Delete bgColor={"red"} onClick={() =>
                            handleDelete(deletionData.data?.id)
                        }>
                            <DeleteIcon/>
                        </Delete>
                    </ActionsBox>
                </DeletionPage>
            </DeletionBackground>}
        </>
    );
}

export default BotLesson;