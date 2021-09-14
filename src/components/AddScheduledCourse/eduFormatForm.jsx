import React, {useState} from "react"
import {Button, Form, Input, Title} from "../Input/styles";
import axios from "axios";
import {link} from "../../baseLink/link";
import {ButtonBox} from "../Input";

const EduFormatForm = () => {

    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})
    const submitEDuFormatForm = (e) => {
        e.preventDefault()

        const form = {
            formatName: e.target.eduFormat.value
        }

        setSubmissionProcess({loading: true, error: false, success: false})
        axios.post(`${link}/edu-format`, form)
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
        <Form onSubmit={submitEDuFormatForm}>
            <Title>EduFormat</Title>
            <Input placeholder={"EduFormat"} type={"text"} name={"eduFormat"}/>
            <ButtonBox loading={loading} error={error} success={success}/>
        </Form>
    )
}

export default EduFormatForm