import React, {useState, useEffect} from "react"
import axios from "axios";
import {Form, Input, PhoneNumberFormat, Radio, RadioBox, RadioWrapper, Select, Textarea, Title} from "../Input/styles";
import {Button} from "../Input/styles";
import {link} from "../../baseLink/link";
import {httpRequest} from "../../util/httpRequest";

const AddClient = ({editValue}) => {

    const [submitProcess, setSubmitProcess] = useState({loading: false, error: false, success: false})

    // const [gender, setGender] = useState()

    const submitClient = (e) => {
        e.preventDefault()
        setSubmitProcess({loading: true, error: false, success: false})

        const {
            firstName,
            lastName,
            birthDate,
            gender,
            region,
            city,
            streetName,
            homeNumber,
            phoneNumber,
            telegram,
            email,
            scheduledCourse
        } = e.target

        const form = {
            firstName: firstName.value,
            lastName: lastName.value,
            birthDate: birthDate.value,
            gender: gender.value,
            region: region.value,
            city: city.value,
            streetName: streetName.value,
            homeNumber: homeNumber.value,
            phoneNumber: phoneNumber.value,
            telegram: telegram.value,
            email: email.value,
            clientCourse: [
                {
                    scheduledCourse: {
                        id: scheduledCourse.value
                    }
                }
            ]
        };

        axios(httpRequest("client-student", "POST", form))
            // .post(`${link}/client-student`, form)
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

    const {loading, error, success} = submitProcess;

    const [courses, setCourses] = useState()

    const getCourse = () => {
        axios(httpRequest("scheduled-course/select", "GET"))
            // .get(`${link}/scheduled-course/select`)
            .then(res => {
                setCourses(res.data)
            })
    }

    useEffect(() => {
        getCourse()
    }, [])

    return (
        <Form onSubmit={submitClient}>

            <Title>Clients Form</Title>

            <Input required name={"firstName"} type={"text"} placeholder={"First Name"}/>
            <Input required name={"lastName"} type={"text"} placeholder={"Last Name"}/>
            <Input required name={"birthDate"} type={"text"} placeholder={"Date of birth"}
                   onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"}/>
            <RadioWrapper>
                <RadioBox>
                    <Radio required id={"male"} name={"gender"} type={"radio"} value={"male"}/>
                    <label htmlFor="male">Male</label>
                </RadioBox>
                <RadioBox>
                    <Radio required id={"female"} name={"gender"} type={"radio"} value={"female"}/>
                    <label htmlFor="female">Female</label>
                </RadioBox>
            </RadioWrapper>
            <Input required name={"region"} type={"text"} placeholder={"Region"}/>
            <Input required name={"city"} type={"text"} placeholder={"City"}/>
            <Input required name={"streetName"} type={"text"} placeholder={"Street name"}/>
            <Input required name={"homeNumber"} type={"text"} placeholder={"Home number"}/>

            <PhoneNumberFormat
                name="phoneNumber"
                format="+998 (##) ###-##-##"
                mask="_"
                className="number-format"
                placeholder="Phone number"
                required
            />
            <Input required name={"telegram"} type={"text"} placeholder={"Telegram"}/>
            <Input required name={"email"} type={"text"} placeholder={"Email"}/>

            {/*<Input type={"text"} placeholder={"scheduled course"}/>*/}
            <Select required name={"scheduledCourse"}>
                {courses?.map(({id, courseName}) =>
                    <option value={id}>{courseName}</option>
                )}
            </Select>

            <Button disabled={loading || error || success} loading={loading} error={error} success={success}>
                {
                    loading ? "loading..." :
                        error ? "error" :
                            success ? "success" :
                                "Submit"
                }
            </Button>
        </Form>
    )
}

export default AddClient