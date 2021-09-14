import React, {useState} from "react"
import axios from "axios";
import {Form, Input, Textarea, Title} from "../Input/styles";
import {Button} from "../Input/styles";
import {link} from "../../baseLink/link";
import {httpRequest} from "../../util/httpRequest";

const AddTeacher = ({editValue}) => {

    const [submitProcess, setSubmitProcess] = useState({loading: false, error: false, success: false})

    const submitTeacher = (e) => {
        e.preventDefault()
        setSubmitProcess({loading: true, error: false, success: false})

        const [
            teacherFullName,
            birthDate,
            description,
            image,
            position] = e.target

        const form = {
            teacherFullName: teacherFullName.value,
            birthDate: birthDate.value,
            description: description.value,
            image: image.value,
            position: position.value
        }

        axios(httpRequest("teachers", "POST", form))
            // .post(`${link}/teachers`, form)
            .then(res => {
                console.log(res)
                setSubmitProcess({loading: false, error: false, success: true})
            })
            .catch(err => {
                console.log(err)
                setSubmitProcess({loading: false, error: true, success: false})
            })
            .finally(res => {
                console.log(res)
                setTimeout(() => setSubmitProcess({loading: false, error: false, success: false}), 5000)
            })
    }

    const [editProcess, setEditProcess] = useState({loading: false, error: false, success: false})

    const editTeacher = (e) => {
        e.preventDefault()
        setEditProcess({loading: false, error: false, success: false})

        const [
            teacherFullName,
            birthDate,
            description,
            image,
            position] = e.target

        const form = {
            teacherFullName: teacherFullName.value,
            birthDate: birthDate.value,
            description: description.value,
            image: image.value,
            position: position.value
        }

        console.log(form)
        axios(httpRequest(`teachers/${editValue.id}`, "PUT", form))
            // .put(`${link}/teachers/${editValue.id}`, form)
            .then(res => {
                console.log(res)
                setEditProcess({loading: false, error: false, success: true})
            })
            .catch(err => {

                console.log(err)
                setEditProcess({loading: false, error: true, success: false})
            })
            .finally(res => {
                console.log(res)
                setTimeout(() => setEditProcess({loading: false, error: false, success: false}), 3000)
            })
    }

    const onSubmit = (e) => {
        console.log("on submit  clicked")
        if (editValue.id !== null) {
            editTeacher(e)
            console.log("edit clicked")
        } else {
            submitTeacher(e)
            console.log("submit clicked")
        }
    }

    const {loading, error, success} = (editValue.id ? editProcess : submitProcess)

    return (
        <Form onSubmit={onSubmit}>

            <Title>Teachers Form</Title>

            <Input required name={"teacherFullName"} type={"text"} placeholder={"Full Name"}
                   defaultValue={editValue.id ? editValue.teacherFullName : ''}/>

            <Input required name={"birthDate"} type={"date"} placeholder={"Date of birth"}
                   defaultValue={editValue.id ? editValue?.birthDate.split("T")[0] : ''}/>

            <Textarea rows={4} required name={"description"} placeholder={"Quote"}
                      defaultValue={editValue.id ? editValue.description : ''}/>
            <br/>

            <Input required name={"image"} type={"text"} placeholder={"Image id"}
                   defaultValue={editValue.id ? editValue.image : ''}/>

            <Input required name={"position"} type={"text"} placeholder={"Position"}
                   defaultValue={editValue.id ? editValue.position : ''}/>

            <Button disabled={loading || error || success} loading={loading} error={error} success={success}>
                {
                    loading ? "loading..." :
                        error ? "error" :
                            success ? "success" :
                                (editValue.id ? "Edit" : "Submit")
                }
            </Button>
            {/*// }*/}
        </Form>
    )
}

export default AddTeacher