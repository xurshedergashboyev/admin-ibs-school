import React, {useState} from "react"
import {Button, Form, Input, Title} from "../Input/styles";
import axios from "axios";
import {link} from "../../baseLink/link";
import {ButtonBox} from "../Input";
import {useDispatch} from "react-redux";

const CategoryForm = () => {

    const dispatch = useDispatch()
    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})
    const submitCategoryForm = (e) => {
        e.preventDefault()

        const form = {
            categoryName: e.target.categoryType.value
        }

        setSubmissionProcess({loading: true, error: false, success: false})
        axios.post(`${link}/category`, form)
            .then(() => {
                setSubmissionProcess({loading: false, error: false, success: true})
                // dispatch(get)
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
        <Form onSubmit={submitCategoryForm}>
            <Title>Category</Title>
            <Input placeholder={"Category"} type={"text"} name={"categoryType"}/>
            <ButtonBox loading={loading} error={error} success={success}/>
        </Form>
    )
}

export default CategoryForm