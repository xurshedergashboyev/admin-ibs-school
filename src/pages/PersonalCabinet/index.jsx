import React, {useEffect, useState} from 'react';
import {
    Age,
    Amount,
    Avatar,
    ClosePopUp,
    ContactBox,
    Country,
    FullName,
    Information,
    InformationBox,
    InformationTitle,
    MainData,
    MainDataBox,
    PaidFor,
    PaymentDate,
    PaymentForm,
    PaymentTableBox,
    PersonalCabinetWrapper,
    Status,
    TableRow,
    Type
} from "./styles";
import Male from "../../assets/icons/boy.svg"
import Female from "../../assets/icons/girl.svg"
import {paymentTypeIcon} from "../../util/paymentType"
import CourseDurationCard from "../../components/CourseDurationCard";
import {
    Button,
    Form,
    Label,
    PhoneNumberFormat,
    Radio,
    RadioBox,
    RadioWrapper,
    Title
} from "../../components/Input/styles";
import {useDispatch, useSelector} from "react-redux";
import {getClientIdData} from "../../redux/modules/clientIdData/clientIdDataAction";
import {whichMonth} from "../../util/whichMonth";

//icons
import {ReactComponent as CloseIcon} from "../../assets/icons/plus.svg"
// import {ReactComponent as Payme} from "../../assets/icons/payme.svg"
// import {ReactComponent as Cash} from "../../assets/icons/cash.svg"
// import {ReactComponent as Card} from "../../assets/icons/card.svg"
import email from "../../assets/icons/email.png"
import smartPhone from "../../assets/icons/smartphone.png"
import telegram from "../../assets/icons/telegram.png"
import axios from "axios";
import {link} from "../../baseLink/link";
import {ButtonBox} from "../../components/Input";
import {useParams} from "react-router-dom";
import {httpRequest} from "../../util/httpRequest";

const PersonalCabinet = () => {

    // const courses = [
    //     {
    //         name: "programming | frontend",
    //         format: "offline",
    //         process: "stopped",
    //         month: [
    //             {
    //                 active: true,
    //                 day: "9 Jan"
    //             }, {
    //                 active: true,
    //                 day: "7 Fab"
    //             }, {
    //                 active: false,
    //                 day: "9 Mar"
    //             }, {
    //                 active: false,
    //                 day: "8 Apr"
    //             }, {
    //                 active: false,
    //                 day: "6 May"
    //             }, {
    //                 active: false,
    //                 day: "3 Jun"
    //             }
    //         ]
    //     },
    //     {
    //         name: "language | English",
    //         format: "online",
    //         process: "graduated",
    //         month: [
    //             {
    //                 active: true,
    //                 day: "9 Jan"
    //             }, {
    //                 active: true,
    //                 day: "7 Fab"
    //             }, {
    //                 active: false,
    //                 day: "9 Mar"
    //             }, {
    //                 active: false,
    //                 day: "8 Apr"
    //             }, {
    //                 active: false,
    //                 day: "6 May"
    //             }, {
    //                 active: false,
    //                 day: "3 Jun"
    //             }
    //         ]
    //     },
    //     {
    //         name: "language | English",
    //         format: "online",
    //         process: "learning",
    //         month: [
    //             {
    //                 active: true,
    //                 day: "29 Jan"
    //             }, {
    //                 active: true,
    //                 day: "27 Fab"
    //             }, {
    //                 active: false,
    //                 day: "29 Mar"
    //             }, {
    //                 active: false,
    //                 day: "28 Apr"
    //             }, {
    //                 active: false,
    //                 day: "26 May"
    //             }, {
    //                 active: false,
    //                 day: "23 Jun"
    //             }, {
    //                 active: false,
    //                 day: "29 Mar"
    //             }, {
    //                 active: false,
    //                 day: "28 Apr"
    //             }, {
    //                 active: false,
    //                 day: "26 May"
    //             }, {
    //                 active: false,
    //                 day: "23 Jun"
    //             }
    //         ]
    //     }, {
    //         name: "language | English",
    //         format: "online",
    //         process: "learning",
    //         month: [
    //             {
    //                 active: true,
    //                 day: "26 May"
    //             }, {
    //                 active: false,
    //                 day: "23 Jun"
    //             }
    //         ]
    //     }
    // ]
    //
    // const payments = [
    //     {
    //         amount: "790 000",
    //         paidFor: "Frontend",
    //         date: "9 Fab",
    //         type: "cash",
    //     }, {
    //         amount: "190 000",
    //         paidFor: "English",
    //         date: "29 Fab",
    //         type: "payme",
    //     }, {
    //         amount: "270 000",
    //         paidFor: "Arabic",
    //         date: "19 Fab",
    //         type: "card",
    //     }, {
    //         amount: "100 000",
    //         paidFor: "Frontend",
    //         date: "19 Mar",
    //         type: "cash",
    //     },
    // ]

    const [paymentPopUp, setPaymentPopUp] = useState({popUp: false, data: {}})
    // const clientId = useSelector(state => state.clientIdReducer);
    const clientsData = useSelector(state => state.clientIdDataReducer)
    const dispatch = useDispatch()

    const {loading, error, clientData} = clientsData

    const [typeOfPayment, setTypeOfPayment] = useState([])
    const getPaymentTypes = () => {
        axios(httpRequest("type-of-payment", "GET"))
            // .get(`${link}/type-of-payment`)
            .then(res => {
                setTypeOfPayment(res.data)
            })
    }

    const {id} = useParams()

    useEffect(() => {
        dispatch(getClientIdData(id))
        getPaymentTypes()
    }, [])

    const birthData = clientData?.birthDate?.split("-")
    const day = birthData !== undefined && birthData[2];
    const month = birthData !== undefined && whichMonth(birthData[1])
    const year = birthData !== undefined && birthData[0]

    const dob = Math.abs(new Date(Date.now() - new Date(clientData?.birthDate).getTime()).getUTCFullYear() - 1970)
    // console.log(birthData)

    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})
    const submitPayment = (e) => {
        e.preventDefault();
        setSubmissionProcess({loading: true, error: false, success: false})
        const {
            amount,
            paymentType
        } = e.target

        // console.log(paymentType.value, paymentPopUp.data?.days,paymentPopUp.data?.scheduledCourse.id)

        const form = {
            amount: parseInt(amount.value.split(",").join("")),
            payer: {
                id: clientData.id
            },
            scheduledCourse: {
                id: paymentPopUp.data?.scheduledCourse.id
            },
            coursePaymentDay: paymentPopUp.data?.days,
            paymentType: {
                id: parseInt(paymentType.value)
            },
        }
        console.log(form)

        axios(httpRequest("payment-list", "POST", form))
            // .post(`${link}/payment-list`, form)
            .then(res => {
                setSubmissionProcess({loading: false, error: false, success: true})
                setTimeout(() => setPaymentPopUp({popUp: false, data: {}}), 4000)
                dispatch(getClientIdData(id))
            })
            .catch(err => {
                setSubmissionProcess({loading: false, error: true, success: false})
            })
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 3000)
            })


    }

    return (
        <>
            <PersonalCabinetWrapper>
                <InformationBox>
                    <Information>
                        <InformationTitle>Course</InformationTitle>
                        {/*{clientData?.clientCourse !== undefined && clientData?.clientCourse.length}*/}
                        {/*{clientsData?.clientCourse?.map(({name, format, process, month}) =>*/}
                        {/*    <CourseDurationCard setPaymentPopUp={setPaymentPopUp} name={name} format={format}*/}
                        {/*                        process={process} month={month}/>*/}
                        {/*)}*/}
                        {/*{courses.map(({name, format, process, month}) =>*/}
                        {/*    <CourseDurationCard setPaymentPopUp={setPaymentPopUp} name={name} format={format}*/}
                        {/*                        process={process} month={month}/>*/}
                        {/*)}*/}
                        {clientData?.clientCourse !== undefined && clientData?.clientCourse.map(({scheduledCourse}) =>
                            <CourseDurationCard setPaymentPopUp={setPaymentPopUp}
                                                scheduledCourse={scheduledCourse}
                                                payments={clientData?.paymentList}
                                                process={"learning"}/>
                        )}
                    </Information>
                    <Information>
                        <InformationTitle>Payment</InformationTitle>

                        <PaymentTableBox>
                            {clientData?.paymentList?.map(({amount, paymentDate, scheduledCourse, paymentType}) =>
                                <TableRow>
                                    <Amount>
                                        {`${amount} UZS`}
                                    </Amount>
                                    <PaidFor>
                                        {scheduledCourse.courseName}
                                    </PaidFor>
                                    <PaymentDate>
                                        {paymentDate}
                                    </PaymentDate>
                                    <Type title={paymentType.paymentType}>
                                        {paymentTypeIcon(paymentType.paymentType)}
                                        {/*<Cash/>*/}
                                    </Type>
                                </TableRow>
                            )}
                        </PaymentTableBox>
                    </Information>
                </InformationBox>
                <MainDataBox>
                    <MainData>
                        <Avatar>
                            <img
                                src={clientData.gender === "male" ? Male : clientData.gender === "female" ? Female : ""}
                                alt="avatar"/>
                            <Status active/>
                        </Avatar>
                        <FullName>
                            {clientData?.firstName} {clientData?.lastName}
                        </FullName>
                        <Age>{day} {month} {year}</Age>
                        <Age>{dob} years old</Age>
                        <Country>{clientData?.address?.region}/{clientData?.address?.city}</Country>
                        <Country>{clientData?.address?.streetName} {clientData?.address?.homeNumber}</Country>
                    </MainData>
                    <MainData>
                        <ContactBox>
                            <img src={smartPhone} alt="smartPhone"/>{clientData?.contact?.phoneNumber}
                        </ContactBox>
                        <ContactBox>
                            <img src={email} alt="email"/>{clientData?.contact?.email}
                        </ContactBox>
                        <ContactBox>
                            <img src={telegram} alt="telegram"/>{clientData?.contact?.telegram}
                        </ContactBox>
                    </MainData>
                </MainDataBox>
                {paymentPopUp.popUp &&
                <PaymentForm>
                    <Form onSubmit={submitPayment}>
                        <Title>Payment</Title>
                        <PhoneNumberFormat thousandSeparator={true} name={"amount"} placeholder={"Amount of money"}
                                           style={{textAlign: "right"}} required/>
                        <RadioWrapper width={"100%"}>
                            {typeOfPayment?.map(({id, paymentType}) =>
                                <RadioBox width={`${100 / typeOfPayment.length}%`}>
                                    <Radio name={"paymentType"} value={id} id={`paymentType${paymentType}`}
                                           type={"radio"}
                                           required/>
                                    <Label htmlFor={`paymentType${paymentType}`}>
                                        <div>{paymentTypeIcon(paymentType)}</div>
                                    </Label>
                                </RadioBox>
                            )}
                        </RadioWrapper>
                        <ButtonBox loading={submissionProcess.loading}
                                   error={submissionProcess.error}
                                   success={submissionProcess.success}
                        />
                        <ClosePopUp onClick={() => setPaymentPopUp({popUp: false, data: {}})}>
                            <CloseIcon/>
                        </ClosePopUp>
                    </Form>
                </PaymentForm>
                }
            </PersonalCabinetWrapper>

        </>
    );
}

export default PersonalCabinet;