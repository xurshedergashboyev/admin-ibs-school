import React, {useState} from "react"
import {Button, Form, Input, Label, Textarea, Title} from "../Input/styles";
import axios from "axios";
import {link} from "../../baseLink/link";
import {httpRequest} from "../../util/httpRequest";

const AddCourse = ({editValue}) => {
    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})
    const submitCourse = (e) => {
        e.preventDefault()
        setSubmissionProcess({loading: false, error: false, success: false})

        const [
            courseNameUz,
            courseNameRu,
            descriptionUz,
            descriptionRu,
            category,
            course,
            tags,
            duration,
            discount,
            courseIcon] = e.target

        const form = {
            courseName_uz: courseNameUz.value,
            courseName_ru: courseNameRu.value,
            description_uz: descriptionUz.value,
            description_ru: descriptionRu.value,
            category: category.value,
            subCategory: course.value,
            tags: tags.value,
            duration: duration.value,
            discount: discount.value,
            courseIcon: courseIcon.value
        }

        axios(httpRequest("courses", "POST", form))
            // .post( `${link}/courses"`, form )
            // axios.post( "localhost:8080/api/v1/image/files/upload", e.target.courseIcon )
            .then(res => {
                setSubmissionProcess({loading: false, error: false, success: true})
                console.log(res)
            })
            .catch(err => {
                setSubmissionProcess({loading: false, error: true, success: false})
            })
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 5000)
            })
        // console.log(e.target.courseIcon.file)
    }

    const {loading, error, success} = submissionProcess;
    return (
        <Form onSubmit={submitCourse}>
            <Title>Courses Form</Title>
            {/*<Label>Course Name Uz</Label>*/}
            <Input name={"courseNameUz"} title={"course name uz"} type={"text"} placeholder={"Course name uz"}
                   defaultValue={editValue?.id ? editValue.courseName_uz : ''}/>
            {/*<br/>*/}
            {/*<Label>Course Name Ru</Label>*/}
            <Input name={"courseNameRu"} title={"course name ru"} type={"text"} placeholder={"Course name ru"}
                   defaultValue={editValue?.id ? editValue.courseName_ru : ''}/>
            {/*<br/>*/}
            {/*<Label>Description Uz</Label>*/}
            <Textarea name={"descriptionUz"} title={"description uz"} row={2} placeholder={"Description uz"}
                      defaultValue={editValue?.id ? editValue.description_uz : ''}/>
            {/*<br/>*/}
            {/*<Label>Description Ru</Label>*/}
            <Textarea name={"descriptionRu"} title={"description ru"} row={2} placeholder={"Description ru"}
                      defaultValue={editValue?.id ? editValue.description_ru : ''}/>
            {/*<br/>*/}
            {/*<Label>Category</Label>*/}
            <Input name={"category"} title={"category"} type={"text"} placeholder={"Category"}
                   defaultValue={editValue?.id ? editValue.category : ''}/>
            {/*<br/>*/}
            {/*<Label>Course</Label>*/}
            <Input name={"course"} title={"course"} type={"text"} placeholder={"Course"}
                   defaultValue={editValue?.id ? editValue.subCategory : ''}/>
            {/*<br/>*/}
            {/*<Label>Tags</Label>*/}
            <Input name={"tags"} title={"tags"} type={"text"} placeholder={"tags"}
                   defaultValue={editValue?.id ? editValue.tags : ''}/>
            {/*<br/>*/}
            {/*<Label>Duration</Label>*/}
            <Input name={"duration"} title={"duration"} type={"number"} min={0} placeholder={"Duration"}
                   defaultValue={editValue?.id ? editValue.duration : ''}/>
            {/*<br/>*/}
            {/*<Label>Discount</Label>*/}
            <Input name={"discount"} title={"discount"} type={"number"} min={0} placeholder={"Discount"}
                   defaultValue={editValue?.id ? editValue.discount : ''}/>
            {/*<br/>*/}
            {/*<Label>Image</Label>*/}
            <Input name={"courseIcon"} title={"image id"} type={"text"} placeholder={"Image id"}
                   defaultValue={editValue?.id ? editValue.courseIcon : ''}/>
            {/*<br/>*/}
            <Button disabled={loading || error || success} loading={loading} error={error} success={success}>
                {
                    loading ? "loading..." :
                        error ? "error" :
                            success ? "success" :
                                "Submit"
                }
            </Button>
            {/*<Button>submit</Button>*/}
        </Form>
    )
}

export default AddCourse