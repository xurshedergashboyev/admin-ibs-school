import React, {useState} from "react"
import {DeleteBox, Title} from "../Table/styles";
import {Checkbox} from "../Input/styles";
import {
    ContactBox,
    FullName,
    FullNameBox,
    PhoneNumber,
    TableRow,
    TableWrapper,
    Tick,
    UndecidedStudentWrapper
} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import ErrorBox from "../ErrorBox";
import Loading from "../Loading";
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import {useHistory} from "react-router";
import axios from "axios";
import {link} from "../../baseLink/link";
import {getRequestedStudents} from "../../redux/modules/requestedStudents/requestedStudentsAction";
import {ReactComponent as DeleteIcon, ReactComponent as Bin} from "../../assets/icons/bin.svg";
import {getUndecidedStudents} from "../../redux/modules/undecidedStudents/undecidedStudentsAction";
import {
    ActionsBox,
    Delete,
    DeletionBackground,
    DeletionImg,
    DeletionPage,
    DeletionText,
    Edit
} from "../TeachersList/styles";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";
import {httpRequest} from "../../util/httpRequest";

const UndecidedStudent = ({setWaitData}) => {
    const student = useSelector(state => state.undecidedStudentsReducer)
    const {loading, error, students} = student
    const history = useHistory()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        axios(httpRequest(`undecidedStudent/${id}`,"DELETE"))
            // .delete(`${link}/undecidedStudent/${id}`)
            .then(() => {
                    dispatch(getUndecidedStudents())
                    setDeletionData({popUp: false, data: {}})
                }
            )
    }

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    return (
        <>
            <UndecidedStudentWrapper>
                <Title>Undecided Student</Title>
                {loading && <Loading/>}
                {error && <ErrorBox/>}
                <TableWrapper>
                    {(!loading && !error) &&
                    students?.map(({
                                       id,
                                       name,
                                       phoneNumber,
                                       contacted,
                                       submittedDate,
                                       contactedDate
                                   }) =>
                        <TableRow key={id}>
                            <DeleteBox onClick={() => {
                                setDeletionData({popUp: true, data: {id: id, name: name, phoneNumber: phoneNumber}})
                            }}
                                       className={"bin"}
                            >
                                <Bin/>
                            </DeleteBox>
                            <FullNameBox>
                                <FullName>
                                    {name}
                                </FullName>
                            </FullNameBox>
                            <ContactBox>
                                <PhoneNumber>
                                    {phoneNumber}
                                </PhoneNumber>
                            </ContactBox>
                            <Tick onClick={() => {
                                setWaitData({name: name, phone: phoneNumber})
                                history.push("/students/waiting-list")
                            }}>
                                <Plus/>
                                {/*<Checkbox type="checkbox" checked={contacted}/>*/}
                            </Tick>
                        </TableRow>
                    )}
                </TableWrapper>


            </UndecidedStudentWrapper>
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

export default UndecidedStudent