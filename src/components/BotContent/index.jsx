import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Title} from "../Input/styles";
import {
    Caption,
    Description,
    FileSize,
    FileType,
    LessonName, LevelBox,
    LevelsWrapper,
    Queue,
    TableRow,
    TableWrapper
} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import axios from "axios";
import {link} from "../../baseLink/link";
import {ReactComponent as DeleteIcon, ReactComponent as Bin} from "../../assets/icons/bin.svg";
import {DeleteBox} from "../Table/styles";
import {ActionsBox, Delete, DeletionBackground, DeletionPage, DeletionText, Edit} from "../TeachersList/styles";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";
import {getTelegramFile} from "../../redux/modules/telegramFile/telegramFileAction";
import {calculateFileSize} from "../../util/calculateFileSize";
import Levels from "../../constants/levels"

//icon
import {ReactComponent as ImageIcon} from "../../assets/icons/picture.svg"
import {ReactComponent as AudioIcon} from "../../assets/icons/speaker.svg"
import {ReactComponent as VideoIcon} from "../../assets/icons/video-camera.svg"
import {ReactComponent as DocIcon} from "../../assets/icons/google-docs.svg"
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg"
import {getLessonData} from "../../redux/modules/lessonData/lessonDataAction";
import {httpRequest} from "../../util/httpRequest";

const BotContent = () => {

    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})

    const [editData, setEditData] = useState({edit: false, data: {}})

    const dispatch = useDispatch()

    const [level, setLevel] = useState(Levels.kids)

    const getTelegramFileById = () => {
        dispatch(getTelegramFile(level))
    }


    const submitTelegramFile = (e) => {
        e.preventDefault()
        setSubmissionProcess({loading: true, error: false, success: false})
        const {queue, caption, lessonData} = e.target
        const {id, fileId, fileSize, contentType, description} = editData.data

        const form = {
            queue: parseInt(queue.value),
            caption: caption.value,
            lessonData: {id: parseInt(lessonData.value)},
            id: id,
            fileId: fileId,
            fileSize: fileSize,
            contentType: contentType,
            description: description,
        }

        console.log(form)
        axios(httpRequest(`telegram-file/${id}`, "PUT", form))
            // .put(`${link}/telegram-file/${id}`, form)
            .then(res => {
                setSubmissionProcess({loading: false, error: false, success: true})
                console.log(res)
                getTelegramFileById()
                e.target.reset();
            })
            .catch(err => {
                console.log(form)
                console.log(err)
                setSubmissionProcess({loading: false, error: true, success: false})
            })
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 5000)
            })
    }

    const list = useSelector(state => state.telegramFileReducer);
    const lessonData = useSelector(state => state.lessonDataReducer);

    const {loading, error, telegramFile} = list;


    const handleDelete = (id) => {
        axios(httpRequest(`telegram-file/${id}`, "DELETE"))
            // .delete(`${link}/telegram-file/${id}`)
            .then(
                () => {
                    setDeletionData({popUp: false, data: {}})
                    getTelegramFileById()
                }
            )
    }


    useEffect(() => {
        getTelegramFileById()
    }, [level])

    useEffect(() => {
        dispatch(getLessonData())
    }, [])

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    return (
        <>
            <div>
                <Form onSubmit={submitTelegramFile}>
                    <Title>Content</Title>
                    <Input type="number" placeholder="Queue" name="queue"
                           defaultValue={editData.edit ? editData.data.queue : ""}
                           required/>
                    <Input type="text" placeholder="Caption" name="caption"
                           defaultValue={editData.edit ? editData.data.caption : ""}
                           required/>
                    <Select name="lessonData">
                        {lessonData.lessonData.map(({id, lessonName, level}) =>
                            <option value={id}>{lessonName} {level}</option>
                        )}
                    </Select>
                    <p>
                        {editData.edit && editData.data.description}
                    </p>
                    <Button disabled={submissionProcess.loading || submissionProcess.error || submissionProcess.success}
                            loading={submissionProcess.loading} error={submissionProcess.error}
                            success={submissionProcess.success}>
                        {
                            submissionProcess.loading ? "loading..." :
                                submissionProcess.error ? "error" :
                                    submissionProcess.success ? "success" : editData.edit ? "Edit" : "Submit"
                        }

                    </Button>
                </Form>

                <LevelsWrapper>
                    <LevelBox active={level === Levels.kids} onClick={() => setLevel(Levels.kids)}>Kids</LevelBox>
                    <LevelBox active={level === Levels.beginner}
                              onClick={() => setLevel(Levels.beginner)}>Beginner</LevelBox>
                    <LevelBox active={level === Levels.elementary}
                              onClick={() => setLevel(Levels.elementary)}>Elementary</LevelBox>
                    <LevelBox active={level === Levels.pre} onClick={() => setLevel(Levels.pre)}>Pre</LevelBox>
                    <LevelBox active={level === Levels.inter} onClick={() => setLevel(Levels.inter)}>Inter</LevelBox>
                    <LevelBox active={level === Levels.upper} onClick={() => setLevel(Levels.upper)}>Upper</LevelBox>
                    <LevelBox active={level === Levels.ielts} onClick={() => setLevel(Levels.ielts)}>IELTS</LevelBox>
                    <LevelBox active={level == null} onClick={() => setLevel(null)}>null</LevelBox>
                </LevelsWrapper>

                {loading && <Loading/>}
                {error && <ErrorBox/>}
                <TableWrapper>
                    {(!loading && !error) &&
                    telegramFile.map(({id, caption, queue, fileId, fileSize, contentType, description, lessonData}) =>
                        <TableRow key={id}>
                            <DeleteBox onClick={() => {
                                setDeletionData({
                                    popUp: true,
                                    data: {id, caption, queue, fileId, fileSize, contentType, description, lessonData}
                                })
                            }} className={"bin"}>
                                <Bin/>
                            </DeleteBox>
                            <Queue>
                                {queue}
                            </Queue>
                            <FileType>
                                {
                                    contentType === "picture" ? <ImageIcon/> :
                                        contentType === "video" ? <VideoIcon/> :
                                            contentType === "audio" ? <AudioIcon/> :
                                                contentType === "document" ? <DocIcon/> : ""
                                }
                            </FileType>
                            <Caption>
                                {caption === null ? "no caption" : caption}
                            </Caption>
                            <FileSize>
                                {calculateFileSize(fileSize)}
                            </FileSize>
                            <Description>
                                {description}
                            </Description>
                            <LessonName>
                                {lessonData === null ? "no lesson data" : ""}
                            </LessonName>
                            <Edit onClick={() => {
                                setEditData({
                                    edit: true,
                                    data: {id, caption, queue, fileId, fileSize, contentType, description, lessonData}
                                })
                                document.getElementById("admin-content").scrollTo({top: 0, behavior: "smooth"});
                            }}>
                                <EditIcon/>
                            </Edit>
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

export default BotContent;