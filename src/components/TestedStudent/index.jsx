import React, {useState} from "react"
import {DeleteBox, Title} from "../Table/styles";
import {Checkbox} from "../Input/styles";
import {
    ContactBox,
    Course,
    FullName,
    FullNameBox, Level,
    PhoneNumber,
    RequestedStudentWrapper,
    ResultBox, TableRow,
    TableWrapper, Tick
} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import {useHistory} from "react-router";
import axios from "axios";
import {link} from "../../baseLink/link";
import {getToGetGiftStudents} from "../../redux/modules/toGetGiftStudents/toGetGiftStudentsAction";
import {ReactComponent as DeleteIcon, ReactComponent as Bin} from "../../assets/icons/bin.svg";
import {getTestedStudents} from "../../redux/modules/testedStudents/testedStudentsAction";
import {ActionsBox, Delete, DeletionBackground, DeletionPage, DeletionText, Edit} from "../TeachersList/styles";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";
import {httpRequest} from "../../util/httpRequest";

const TestedStudent = ({setWaitData}) => {

    const findLevel = (myResult) => {
        if (myResult >= 0 && myResult <= 14) {
            return {level: "Beginner", color: "#ff4545"}
        } else if (myResult > 14 && myResult <= 20) {
            return {level: "Elementary", color: "#ffa534"}
        } else if (myResult > 20 && myResult <= 30) {
            return {level: "Pre", color: "#ffe234"}
        } else if (myResult > 30 && myResult <= 40) {
            return {level: "Intermediate", color: "#b7dd29"}
        } else if (myResult > 40 && myResult <= 45) {
            return {level: "Upper", color: "#57e32c"}
        } else if (myResult > 45 && myResult <= 50) {
            return {level: "IELTS", color: "#04f3bc"}
        } else {
            return null
        }
    }

    const students = useSelector(state => state.testedStudentReducer)
    const {loading, error, testedStudent} = students
    const history = useHistory()

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        axios(httpRequest(`tested-student/${id}`,"DELETE"))
            // .delete(`${link}/tested-student/${id}`)
            .then(() => {
                    dispatch(getTestedStudents())
                setDeletionData({popUp:false,data:{}})
                }
            )
    }

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    return (
        <>
            <RequestedStudentWrapper>
                <Title>Tested Student</Title>
                {loading && <Loading/>}
                {error && <ErrorBox/>}
                <TableWrapper>
                    {(!loading && !error) &&
                    testedStudent?.map(({
                                            id,
                                            fullName,
                                            phoneNumber,
                                            subject,
                                            result,
                                            localDateTime
                                        }) =>
                        <TableRow key={id}>
                            <DeleteBox onClick={() => {
                                // handleDelete(id)
                                setDeletionData({popUp: true, data: {id, fullName, phoneNumber}})
                            }}
                                       className={"bin"}>
                                <Bin/>
                            </DeleteBox>
                            <FullNameBox>
                                <FullName>
                                    {fullName}
                                </FullName>
                                <Course>
                                    {subject}
                                </Course>
                            </FullNameBox>
                            <ContactBox>
                                <PhoneNumber>
                                    {phoneNumber}
                                </PhoneNumber>
                            </ContactBox>
                            <ResultBox>
                                <Level bgColor={findLevel(result).color}>
                                    {findLevel(result).level}
                                </Level>
                            </ResultBox>
                            <Tick onClick={() => {
                                setWaitData({name: fullName, course: subject, phone: phoneNumber})
                                history.push("/students/waiting-list")
                            }}>
                                <Plus/>
                            </Tick>
                        </TableRow>
                    )}
                </TableWrapper>
            </RequestedStudentWrapper>
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
    )
}

export default TestedStudent