import React, {useState, useEffect} from "react"
import {Button, Form, Input, Label, Radio, RadioBox, RadioWrapper, Select, Textarea, Title} from "../Input/styles";
import axios from "axios";
import {link} from "../../baseLink/link";
import {DisplayFlex} from "../ScheduledCourseList/styles";
import {Center} from "../../pages/Dashboard/styles";
import {ButtonAdd, Clean, Month, MonthBox, Number} from "./styles";
import CategoryForm from "./categoryForm";
import CourseTypeForm from "./courseTypeForm";
import EduFormatForm from "./eduFormatForm";
import TypeOfPaymentForm from "./typeOfPaymentForm";
import {ButtonBox} from "../Input";
import {getScheduledCourses} from "../../redux/modules/scheduledCourses/scheduledCoursesAction";
import {useDispatch} from "react-redux";
import {httpRequest} from "../../util/httpRequest";

const AddScheduledCourse = ({editValue}) => {
    const [moreForm, setMoreForm] = useState(false)
    const constant = 1;
    const [submissionProcess, setSubmissionProcess] = useState({loading: false, error: false, success: false})
    const dispatch = useDispatch()
    const submitCourse = (e) => {
        e.preventDefault()
        setSubmissionProcess({loading: false, error: false, success: false})

        const {
            courseName,
            teacher,
            format,
            type
        } = e.target

        const form = {
            courseName: courseName.value,
            teacher: {
                id: teacher.value
            },
            format: {
                id: format.value
            },
            days: monthDates,
            type: {
                id: type.value
            }
        }

        axios(httpRequest("scheduled-course", "POST", form))
            // .post(`${link}/scheduled-course`, form)
            .then(res => {
                setSubmissionProcess({loading: false, error: false, success: true})
                dispatch(getScheduledCourses())
            })
            .catch(err => {
                setSubmissionProcess({loading: false, error: true, success: false})
                console.log(err)
            })
            .finally(() => {
                setTimeout(() => setSubmissionProcess({loading: false, error: false, success: false}), 5000)
            })
        // console.log(e.target.courseIcon.file)
    }

    const [courseUtil, setCourseUtil] = useState()
    const getCourseUtil = () => {
        axios(httpRequest("scheduled-course/form","GET"))
            // .get(`${link}/scheduled-course/form`)
            .then((res) => {
                setCourseUtil(res.data)
                console.log(res.data)
            })
    }

    useEffect(() => {
        getCourseUtil()
        console.log(courseUtil)
    }, [constant])

    const {loading, error, success} = submissionProcess;
    const [duration, setDuration] = useState(3)

    const [monthDates, setMonthDates] = useState([]);

    const [month, setMonth] = useState()
    const addToMonth = (e) => {
        // e.preventDefault()
        month && setMonthDates((prevState) => ([...prevState, {day: month}]))
        setMonth()
    }

    // useEffect(() => {
    //     // months()
    // }, [duration])
    return (
        <>
            <Form onSubmit={submitCourse}>
                <Title onClick={getCourseUtil}>Scheduled Course</Title>
                <Input name={"courseName"} title={"course name"} type={"text"} placeholder={"Course name"}
                       defaultValue={editValue?.id ? editValue.courseName_uz : ''}/>
                {/*<Input  type={"text"} placeholder={"Teacher"} list={"teacherList"}*/}
                {/*       defaultValue={editValue?.id ? editValue.courseName_ru : ''}/>*/}

                <Select name={"teacher"} title={"teachers"} required>
                    {courseUtil !== undefined && courseUtil?.teacher.map(({id, teacherFullName, position}) =>
                        <option value={id}>{`${teacherFullName} - ${position}`}</option>
                    )}
                </Select>

                <RadioWrapper width={"90%"}>
                    {courseUtil !== undefined && courseUtil?.format.map(({id, formatName}) =>
                        <RadioBox key={id} width={`${100 / courseUtil?.format.length}%`}>
                            <Radio required id={formatName} name={"format"} type={"radio"} value={id}/>
                            <label htmlFor={formatName}>{formatName}</label>
                        </RadioBox>
                    )}
                </RadioWrapper>

                <Select name={"type"} title={"type"} required>
                    {courseUtil !== undefined && courseUtil?.type.map(({id, courseName, category}) =>
                        <option key={id} value={id}>{`${courseName}`}</option>
                    )}
                </Select>

                {/*<Input name={`courseType`} title={"course type"} type={"text"} placeholder={"course type"}*/}
                {/*    // defaultValue={editValue?.id ? editValue.duration : duration}*/}
                {/*       onChange={(e) => setDuration(e.target.value)}*/}
                {/*/>*/}


                <Center>
                    <Input required style={{margin: 0, width: "70%"}} name={`date`} title={"date"} type={"date"} min={0}
                           placeholder={"Date"}
                        // defaultValue={editValue?.id ? editValue.duration : month}
                           value={month}
                           onChange={(e) => setMonth(e.target.value)}
                    />
                    <ButtonAdd style={{margin: 0, width: "30%", height: "54px"}} onClick={() => addToMonth()}>
                        add
                    </ButtonAdd>
                </Center>
                {monthDates.length > 0 && <Clean onClick={() => setMonthDates([])}>clean</Clean>}
                {month} <br/>
                {monthDates.map(({day}, index) =>
                    <MonthBox key={index}>
                        <Number>{index + 1})</Number><Month>{day}</Month>
                    </MonthBox>
                )}
                {/*{duration}*/}
                {/*{monthInputs.length}*/}
                {/*<Input name={"courseIcon"} title={"image id"} type={"text"} placeholder={"Image id"}*/}
                {/*       defaultValue={editValue?.id ? editValue.courseIcon : ''}/>*/}
                <ButtonBox loading={loading} error={error} success={success}/>
            </Form>

            {moreForm &&
            <>
                <CategoryForm/>
                <CourseTypeForm/>
                <EduFormatForm/>
                <TypeOfPaymentForm/>
            </>
            }
            <Button onClick={() => setMoreForm(!moreForm)}>{!moreForm ? "More" : "Less"}</Button>
        </>
    )
}

export default AddScheduledCourse