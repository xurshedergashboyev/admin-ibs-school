import React, {useState} from "react"
import {Button, Form, Input, Title} from "../Input/styles";
import axios from "axios";
import {link} from "../../baseLink/link";
import {ButtonBox} from "../Input";

const TypeOfPaymentForm = () => {

    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})
    const submitTypeOfPaymentForm = (e) => {
        e.preventDefault()

        const form = {
            paymentType: e.target.paymentType.value
        }

        setSubmissionProcess({loading: true, error: false, success: false})
        axios.post(`${link}/type-of-payment`, form)
            .then(() => {
                setSubmissionProcess({loading: false, error: false, success: true})
            })
            .catch((err) => {
                setSubmissionProcess({loading: false, error: true, success: false})
                console.log(err)
            })
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 3000)
            })
    }

    const {loading, error, success} = submissionProcess

    return (
        <Form onSubmit={submitTypeOfPaymentForm}>
            <Title>Payment Type</Title>
            <Input placeholder={"Type of payment"} type={"text"} name={"paymentType"}/>
            <ButtonBox loading={loading} error={error} success={success}/>
        </Form>
    )
}

export default TypeOfPaymentForm