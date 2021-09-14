import React, {useState} from "react"
import {
    Circle,
    CourseDurationBox,
    CourseMonthBox,
    CourseName, Date,
    Icon,
    PaymentDay,
    StopFinishBox, StopOrGraduate
} from "./styles";
import {ReactComponent as Stop} from "../../assets/icons/stop.svg";
import {ReactComponent as Finish} from "../../assets/icons/finish.svg";
import {ReactComponent as Column} from "../../assets/icons/column.svg";
import {whichMonth} from "../../util/whichMonth";

const CourseDurationCard = ({setPaymentPopUp, payments, scheduledCourse, process}) => {

    const [toggle, setToggle] = useState(false)

    const stopCourse = () => {

    }

    const finishCourse = () => {

    }

    const makeDate = (date) => {
        const dateArray = date.split("-")
        const day = dateArray[2]
        const month = whichMonth(dateArray[1])
        return `${day} ${month}`
    }

    return (
        <>
            <CourseMonthBox>
                <CourseName>
                <span onClick={() => setToggle(!toggle)}>
                    {`${scheduledCourse.type.courseName} | ${scheduledCourse.type.category.categoryName}`}
                </span>
                    {toggle &&
                    <StopFinishBox>
                        <Icon onClick={() => stopCourse()}>
                            <Stop/>
                        </Icon>
                        <Icon onClick={() => finishCourse()}>
                            <Finish/>
                        </Icon>
                    </StopFinishBox>}
                    {/*</span>*/}
                    <small>{scheduledCourse.format.formatName}</small>
                </CourseName>
                <CourseDurationBox>
                    {scheduledCourse?.days?.map(({id, day}) => {
                        let active = false;
                        payments?.map(props => {
                            if (props.scheduledCourse.id === scheduledCourse.id) {
                                if (props.coursePaymentDay.id === id) {
                                    active = true
                                }
                            }
                        })
                        return (
                            <PaymentDay key={id}
                                        active={active}
                                        onClick={() => {
                                            !active && setPaymentPopUp({
                                                popUp: true,
                                                data: {scheduledCourse, days: {id, day}}
                                            })
                                        }}
                                        width={100 / scheduledCourse?.days?.length}>
                                <Circle active={active}>
                                    <Column/>
                                </Circle>
                                <Date>{makeDate(day)}</Date>
                            </PaymentDay>)
                    })}
                </CourseDurationBox>
                {process !== "learning" &&
                <StopOrGraduate process={process}>
                    <p>{process}</p>
                </StopOrGraduate>
                }
            </CourseMonthBox>

        </>
    )
}

export default CourseDurationCard