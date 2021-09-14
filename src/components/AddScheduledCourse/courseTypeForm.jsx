import React, {useState, useEffect} from "react"
import {Button, Form, Input, Select, Title} from "../Input/styles";
import axios from "axios";
import {link} from "../../baseLink/link";
import {ButtonBox} from "../Input";

const CourseTypeForm = () => {

    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})
    const submitCourseTypeForm = (e) => {
        e.preventDefault()
        const form = {
            courseName: e.target.courseType.value,
            category: {
                id: e.target.categoryType.value,
                // categoryName: e.target
            }
        }
        console.log(form)
        setSubmissionProcess({loading: true, error: false, success: false})
        axios.post(`${link}/course-type`, form)
            .then(() => {
                setSubmissionProcess({loading: false, error: false, success: true})
            })
            .catch(() => {
                setSubmissionProcess({loading: false, error: true, success: false})
            })
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 3000)
            })
    }
    const {loading, error, success} = submissionProcess

    const [categories, setCategories] = useState([])

    const getCategory = () => {
        axios.get(`${link}/category`)
            .then((res) => {
                setCategories(res.data)
            })
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <Form onSubmit={submitCourseTypeForm}>
            <Title onClick={getCategory}>Course Type</Title>
            <Select name={"categoryType"}>
                {categories?.map(({id, categoryName}) =>
                    <option value={id}>{categoryName}</option>
                )}
            </Select>
            {/*<Input placeholder={"Category"} name={"categoryType"} list={"category"}/>*/}
            <Input placeholder={"Course Type"} type={"text"} name="courseType"/>
            <ButtonBox loading={loading} error={error} success={success}/>
        </Form>
    )
}

export default CourseTypeForm