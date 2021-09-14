import React, {useState} from 'react';
import {Button, Form, Input, PhoneNumberFormat, Title} from "../Input/styles";
import {ContactBox, Course, Date, FullName, FullNameBox, PhoneNumber, TableRow, TableWrapper, Telegram} from "./styles";
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
import {httpRequest} from "../../util/httpRequest";

const WaitingList = ({waitData}) => {

    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})

    const dispatch = useDispatch()

    const submitList = (e) => {
        e.preventDefault()
        setSubmissionProcess({loading: true, error: false, success: false})
        const {fullName, subject, date, telegram, phoneNumber} = e.target

        const form = {
            fullName: fullName.value,
            subject: subject.value,
            date: date.value,
            telegram: telegram.value,
            phoneNumber: phoneNumber.value
        }

        axios(httpRequest("waiting-list", "POST", form))
            // .post(`${link}/waiting-list`, form)
            .then(res => {
                setSubmissionProcess({loading: false, error: false, success: true})
                console.log(res)
                dispatch(getWaitingList())

            })
            .catch(err => {
                setSubmissionProcess({loading: false, error: true, success: false})
            })
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 5000)
            })
    }

    const list = useSelector(state => state.waitingListReducer)

    const {loading, error, waitingList} = list

    const handleDelete = (id) => {
        axios(httpRequest(`waiting-list/${id}`,"DELETE"))
            // .delete(`${link}/waiting-list/${id}`)
            .then(() => {
                    setDeletionData({popUp: false, data: {}})
                    dispatch(getWaitingList())
                }
            )
    }

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    return (
        <>
            <div>
                <Form onSubmit={submitList}>
                    <Title>Waiting List</Title>
                    <Input type={"text"} placeholder={"fullName"} name={"fullName"}
                           defaultValue={waitData?.name && waitData.name}
                           required/>
                    <Input type={"text"} placeholder={"subject"} name={"subject"}
                           defaultValue={waitData?.course && waitData.course}
                           required/>
                    <Input type={"date"} placeholder={"date"} name={"date"} required/>
                    <Input type={"text"} placeholder={"telegram"} name={"telegram"} required/>
                    <PhoneNumberFormat
                        name="phoneNumber"
                        format="+998 (##) ###-##-##"
                        mask="_"
                        id={"hero-form-phone-number"}
                        className="number-format"
                        placeholder="phone number"
                        // onChange={(e)=>setPhoneNumber(e.target.value)}
                        // value={phoneNumber}
                        defaultValue={waitData?.phone && waitData.phone}
                        required
                    />
                    {/*<Input type={"tel"} placeholder={"phone number"} defaultValue={waitData?.phone && waitData.phone} required/>*/}
                    <Button disabled={submissionProcess.loading || submissionProcess.error || submissionProcess.success}
                            loading={submissionProcess.loading} error={submissionProcess.error}
                            success={submissionProcess.success}>
                        {
                            submissionProcess.loading ? "loading..." :
                                submissionProcess.error ? "error" :
                                    submissionProcess.success ? "success" : "Submit"
                        }

                    </Button>
                </Form>

                {loading && <Loading/>}
                {error && <ErrorBox/>}
                <TableWrapper>
                    {(!loading && !error) &&
                    waitingList.map(({id, fullName, subject, phoneNumber, telegram, date}) =>
                        <TableRow key={id}>
                            <DeleteBox onClick={() => {
                                setDeletionData({popUp: true, data: {id, fullName, phoneNumber}})
                                // handleDelete(id)
                            }} className={"bin"}>
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
                                <Telegram>
                                    {telegram}
                                </Telegram>
                            </ContactBox>
                            <Date>
                                <p>
                                    {date}
                                </p>
                            </Date>
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

export default WaitingList;