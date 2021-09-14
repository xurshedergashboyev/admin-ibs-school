import React, {useState} from "react"
import {DeleteBox, Title} from "../Table/styles";
import {Checkbox} from "../Input/styles";
import {Email, TableRow, TableWrapper, Tick, ToGetGiftStudentWrapper} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import axios from "axios";
import {link} from "../../baseLink/link";
import {getUndecidedStudents} from "../../redux/modules/undecidedStudents/undecidedStudentsAction";
import {getToGetGiftStudents} from "../../redux/modules/toGetGiftStudents/toGetGiftStudentsAction";
import {ReactComponent as DeleteIcon, ReactComponent as Bin} from "../../assets/icons/bin.svg";
import {ActionsBox, Delete, DeletionBackground, DeletionPage, DeletionText, Edit} from "../TeachersList/styles";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";
import {httpRequest} from "../../util/httpRequest";

const ToGetGiftStudent = () => {
    const students = useSelector(state => state.toGetGiftReducer)

    const {loading, error, toGetGift} = students

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        axios(httpRequest(`toGetGift/${id}`,"DELETE"))
            // .delete(`${link}/toGetGift/${id}`)
            .then(() => {
                    setDeletionData({popUp: false, data: {}})
                    dispatch(getToGetGiftStudents())
                }
            )
    }

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    return (
        <>
            <ToGetGiftStudentWrapper>
                <Title>To Get Gift Student</Title>
                {loading && <Loading/>}
                {error && <ErrorBox/>}
                <TableWrapper>
                    {(!loading && !error) &&
                    toGetGift?.map(({
                                        id,
                                        email,
                                        submittedTime,
                                        contacted,
                                        contactedTime
                                    }) =>
                        <TableRow key={id}>
                            <DeleteBox onClick={() => {
                                setDeletionData({popUp: true, data: {id, email}})
                                // handleDelete(id)
                            }}

                                       className={"bin"}>
                                <Bin/>
                            </DeleteBox>
                            <Email>
                                {email}
                            </Email>
                            <Tick>
                                <Checkbox type="checkbox" checked={contacted}/>
                            </Tick>
                        </TableRow>
                    )}
                </TableWrapper>
            </ToGetGiftStudentWrapper>
            {deletionData.popUp &&
            <DeletionBackground>
                <DeletionPage>
                    <DeletionText>
                        {deletionData.data?.email}
                        {/*<br/>*/}
                        {/*<small>{deletionData.data?.phoneNumber}</small>*/}
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

export default ToGetGiftStudent