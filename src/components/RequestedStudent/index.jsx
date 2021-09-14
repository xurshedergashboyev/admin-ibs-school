import React, {useState} from "react"
// import { Table, TableBody, TableData, TableHead, TableRow, Title } from "../Table/styles";
import {Checkbox} from "../Input/styles";
import {
    ContactBox,
    Course, Email,
    FullName,
    FullNameBox,
    PhoneNumber,
    RequestedStudentWrapper,
    TableRow,
    TableWrapper, Tick
} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {DeleteBox, Title} from "../Table/styles";
import ErrorBox from "../ErrorBox";
import Loading from "../Loading";

//icon
import {ReactComponent as Plus} from "../../assets/icons/plus.svg"
import {ReactComponent as DeleteIcon, ReactComponent as Bin} from "../../assets/icons/bin.svg"
import {useHistory} from "react-router";
import axios from "axios";
import {link} from "../../baseLink/link";
import {getRequestedStudents} from "../../redux/modules/requestedStudents/requestedStudentsAction";
import {ActionsBox, Delete, DeletionBackground, DeletionPage, DeletionText, Edit} from "../TeachersList/styles";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";

const RequestedStudent = ({setWaitData}) => {

    const history = useHistory()

    const dispatch = useDispatch()

    const requestedStudents = useSelector(state => state.requestedStudentReducer)

    const {loading, error, requestedStudent} = requestedStudents

    const handleDelete = (id) => {
        axios(`enrolledStudent/${id}`,"DELETE")
            // .delete(`${link}/enrolledStudent/${id}`)
            .then(() => {
                    dispatch(getRequestedStudents())
                    setDeletionData({popUp: false, data: {}})
                }
            )
    }

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    return (
        <>
            <RequestedStudentWrapper>
                <Title>Requested Student</Title>
                {loading && <Loading/>}
                {error && <ErrorBox/>}
                <TableWrapper>
                    {
                        (!loading && !error) &&
                        requestedStudent?.map(
                            (
                                {
                                    id,
                                    name,
                                    phoneNumber,
                                    email,
                                    selectedCourse,
                                    contacted,
                                    enrolledTime
                                }) =>
                        <TableRow key={id}>
                            <DeleteBox onClick={()=>{
                                // handleDelete(id)
                                setDeletionData({popUp:true,data:{id,name,phoneNumber}})
                            }} className={"bin"}>
                                <Bin/>
                            </DeleteBox>
                            <FullNameBox>
                                <FullName>
                                    {name}
                                </FullName>
                                <Course>
                                    {selectedCourse}
                                </Course>
                            </FullNameBox>
                            <ContactBox>
                                <PhoneNumber>
                                    {phoneNumber}
                                </PhoneNumber>
                                <Email>
                                    {email}
                                </Email>
                            </ContactBox>
                            <Tick onClick={() => {
                                setWaitData({name: name, course: selectedCourse, phone: phoneNumber})
                                history.push("/students/waiting-list")
                            }}>
                                <Plus/>
                                {/*<Checkbox type="checkbox" checked={false}/>*/}
                            </Tick>
                        </TableRow>
                        )
                    }
                </TableWrapper>
            </RequestedStudentWrapper>
            {deletionData.popUp &&
            <DeletionBackground>
                <DeletionPage>
                    <DeletionText>
                        {deletionData.data?.name}
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

export default RequestedStudent