import React, {useState} from "react"
import axios from "axios";

//image
import {ReactComponent as Upload} from "../../assets/icons/upload.svg"
import {FileName, Form, Label} from "./styles";
import {Button} from "../Input/styles";
import {link} from "../../baseLink/link";
import {httpRequest} from "../../util/httpRequest";

const AddImage = () => {

    const [imageFile, setImageFile] = useState()

    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})

    const submitImage = (e) => {
        e.preventDefault()
        setSubmissionProcess({loading: true, error: false, success: false})
        const data = new FormData()
        data.append('courseIcon', imageFile)

        console.log(imageFile)
        axios(httpRequest("images/upload", "POST", data))
            // .post(`${link}/images/upload`, data)
            .then(res => {
                    console.log(res)
                    setSubmissionProcess({loading: true, error: false, success: false})
                    e.target.reset()
                    setImageFile()
                }
            )
            .catch(err => {
                    setSubmissionProcess({loading: false, error: true, success: false})

                    console.log(err)
                }
            )
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 5000)
            })
    }

    const {loading, error, success} = submissionProcess

    return (
        <>
            <Form onSubmit={submitImage}>
                <Label htmlFor={"uploadImg"}><Upload/></Label>
                {imageFile && <FileName>{imageFile?.name}</FileName>}
                <input type="file" id={"uploadImg"} name="uploadImg" style={{display: "none"}}
                       onChange={(e) => setImageFile(e.target.files[0])}/>

                <Button disabled={loading || error || success} loading={loading} error={error}
                        success={success}>{loading ? "Loading..." : error ? "Error" : success ? "Success" : "Submit"}</Button>
            </Form>
        </>
    )
}

export default AddImage