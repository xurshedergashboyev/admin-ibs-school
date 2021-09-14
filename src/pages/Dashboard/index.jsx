import React, {useEffect, useState} from "react"
import {
    CardBox,
    CardTitle,
    ChartBox,
    ChartNav,
    ChartNavbarBox,
    ChartNavs,
    ChartTitle,
    DashboardPageWrapper,
    Data,
    DisplayFlex,
    Icon,
    Main,
    Numbers,
    Secondary,
    TopCardsBox,
    TopCardsWrapper
} from "./styles";
import {ReactComponent as UpDown} from "../../assets/icons/up-down.svg"
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import useWindowDimensions from "../../hooks/useWindowDimentions";
import {useDispatch, useSelector} from "react-redux";
import {getDashboard} from "../../redux/modules/dashboard/dashboardAction";

const Dashboard = () => {

    const dispatch = useDispatch();

    // function getRandomColor() {
    //     let letters = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    const {width, height} = useWindowDimensions()

    // const cardData = [
    //     {
    //         all: 650,
    //         percent: 20,
    //         name: "Total number of students"
    //     }, {
    //         all: 5,
    //         percent: -10,
    //         name: " Course stopped students"
    //     }, {
    //         all: 20,
    //         percent: 10,
    //         name: "Course graduated students"
    //     }, {
    //         all: 50,
    //         percent: -7,
    //         name: "New students for academy"
    //     },
    // ]

    // const courseStudentData = [
    //     {
    //         categoryName: "programming",
    //         numberOfStudents: 132,
    //         courses: [
    //             {
    //                 courseName: "frontend",
    //                 numberOfStudent: 13,
    //                 color: "var(--green)"
    //             }, {
    //                 courseName: "backend",
    //                 numberOfStudent: 46,
    //                 color: "var(--red)"
    //             }, {
    //                 courseName: "bootcamp",
    //                 numberOfStudent: 23,
    //                 color: "var(--grey)"
    //             }, {
    //                 courseName: "mobile",
    //                 numberOfStudent: 50,
    //                 color: "var(--light-blue)"
    //             },
    //         ]
    //     },
    //     {
    //         categoryName: "business",
    //         numberOfStudents: 94,
    //         courses: [
    //             {
    //                 courseName: "targeting",
    //                 numberOfStudent: 33,
    //                 color: "var(--green)"
    //             }, {
    //                 courseName: "smm",
    //                 numberOfStudent: 26,
    //                 color: "var(--red)"
    //             }, {
    //                 courseName: "marketing",
    //                 numberOfStudent: 35,
    //                 color: "var(--grey)"
    //             }
    //             // , {
    //             //     courseName: "mobile",
    //             //     numberOfStudent: 50,
    //             //     color:"var(--light-blue)"
    //             // },
    //         ]
    //     },
    //     {
    //         categoryName: "language",
    //         numberOfStudents: 100,
    //         courses: [
    //             {
    //                 courseName: "english",
    //                 numberOfStudent: 25,
    //                 color: "var(--green)"
    //             }, {
    //                 courseName: "ielts",
    //                 numberOfStudent: 45,
    //                 color: "var(--red)"
    //             }, {
    //                 courseName: "arabic",
    //                 numberOfStudent: 30,
    //                 color: "var(--grey)"
    //             }
    //             // , {
    //             //     courseName: "mobile",
    //             //     numberOfStudent: 26,
    //             //     color:"var(--light-blue)"
    //             // },
    //         ]
    //     },
    // ]

    // const data01 = [
    //     {
    //         "name": "Group A",
    //         "value": 400
    //     },
    //     {
    //         "name": "Group B",
    //         "value": 300
    //     },
    //     {
    //         "name": "Group C",
    //         "value": 300
    //     },
    //     {
    //         "name": "Group D",
    //         "value": 200
    //     },
    //     {
    //         "name": "Group E",
    //         "value": 278
    //     },
    //     {
    //         "name": "Group F",
    //         "value": 189
    //     }
    // ];
    // const data02 = [
    //     {
    //         "name": "Group A",
    //         "value": 2400
    //     },
    //     {
    //         "name": "Group B",
    //         "value": 4567
    //     },
    //     {
    //         "name": "Group C",
    //         "value": 1398
    //     },
    //     {
    //         "name": "Group D",
    //         "value": 9800
    //     },
    //     {
    //         "name": "Group E",
    //         "value": 3908
    //     },
    //     {
    //         "name": "Group F",
    //         "value": 4800
    //     }
    // ];
    //
    // const data = [
    //     {
    //         "name": "Page A",
    //         "uv": 4000,
    //         "pv": 2400,
    //         "amt": 2400
    //     },
    //     {
    //         "name": "Page B",
    //         "uv": 3000,
    //         "pv": 1398,
    //         "amt": 2210
    //     },
    //     {
    //         "name": "Page C",
    //         "uv": 2000,
    //         "pv": 9800,
    //         "amt": 2290
    //     },
    //     {
    //         "name": "Page D",
    //         "uv": 2780,
    //         "pv": 3908,
    //         "amt": 2000
    //     },
    //     {
    //         "name": "Page E",
    //         "uv": 1890,
    //         "pv": 4800,
    //         "amt": 2181
    //     },
    //     {
    //         "name": "Page F",
    //         "uv": 2390,
    //         "pv": 3800,
    //         "amt": 2500
    //     },
    //     {
    //         "name": "Page G",
    //         "uv": 3490,
    //         "pv": 4300,
    //         "amt": 2100
    //     }
    // ]
    const category = {
        programming: {
            total: 143,
            data: [
                {
                    "name": "frontend",
                    "uv": 4000,
                },
                {
                    "name": "backend",
                    "uv": 3000,
                },
                {
                    "name": "mobile",
                    "uv": 2000,
                },
                {
                    "name": "bootcamp",
                    "uv": 2780,
                }
            ]
        },
        language: {
            total: 143,
            data: [
                {
                    "name": "arabic",
                    "uv": 4000,
                },
                {
                    "name": "english",
                    "uv": 3000,
                },
                {
                    "name": "ielts",
                    "uv": 2000,
                }
            ]
        },
        design: {
            total: 143,
            data: [
                {
                    "name": "ui & ux design",
                    "uv": 4000,
                },
                {
                    "name": "graphic design",
                    "uv": 3000,
                }
            ]
        },
        business: {
            total: 143,
            data: [
                {
                    "name": "smm",
                    "uv": 3000,
                },
                {
                    "name": "targeting",
                    "uv": 2000,
                },
                {
                    "name": "marketing",
                    "uv": 2780,
                }
            ]
        },
    }

    // const categories = [
    //     {
    //         name: "programming",
    //         data: category.programming
    //     },
    //     {
    //         name: "business",
    //         data: category.business
    //     },
    //     {
    //         name: "design",
    //         data: category.design
    //     },
    //     {
    //         name: "language",
    //         data: category.language
    //     }
    // ]


    const getDashboardData = () => {
        dispatch(getDashboard())
    }

    const dashboardData = useSelector(state => state.dashboardReducer)

    const {loading, error, dashboard} = dashboardData

    const [courseData, setCourseData] = useState([])

    const courseCategories = dashboard.categories;

    const [selectedCategory, setSelectedCategory] = useState({})

    useEffect(() => {
        getDashboardData();
        setTimeout(() => setSelectedCategory({
            id: 1,
            categoryName: "programming"
        }), 1000)
        // getDashboardDataPromise.then(()=>setSelectedCategory(dashboard.categories[0]))
    }, [])

    const barChartData = () => {
        setCourseData([])

        dashboard?.byCategory.map(({courseType, numberOfStudent}) => {
            if (courseType.category.id === selectedCategory.id) {
                setCourseData((prevState) => ([...prevState, {name: courseType.courseName, uv: numberOfStudent}]))
            }
            // console.log("byCategory", value)
        })

        // courseType.map((courseType, index) => {
        //     if (courseType.category.id === selectedCategory.id) {
        //         Object?.entries(dashboard?.byCategory).map((item) => {
        //             console.log("item", item)
        //             const courseTypeId = parseInt(item[0]);
        //             const numberOfStudent = item[1];
        //
        //             if (courseType.id === courseTypeId) {
        //                 setCourseData((prevState) => ([...prevState, {name: courseType.courseName, uv: numberOfStudent}]))
        //                 console.log("course data",courseData)
        //             } else {
        //                 setCourseData((prevState) => ([...prevState, {name: courseType.courseName, uv: numberOfStudent}]))
        //                 console.log("else course data",courseData)
        //
        //             }
        //         })
        //     }
        // })


        // courseCategories?.map((categoryValue, index) => {
        // dashboard.byCategory
        // courseType.map((typeValue, index) => {
        //     // typeValue.id
        //     typeValue.category.id = selectedCategory.id
        //     // categoryName
        //     // setCourseData((prevState) => ({...prevState, [value?.id]: value?.categoryName}))
        // })
        // })

        // console.log(dat)
        // console.log(d)
    }

    useEffect(() => {
        (!loading && !error && dashboard.byCategory !== undefined) &&
        barChartData()
    }, [selectedCategory])

    // console.log(courseType)
    // console.log("selected category",selectedCategory)
    // console.log("category", dashboard.categories[0])


    return (
        <DashboardPageWrapper>
            <TopCardsWrapper>
                <TopCardsBox>
                    {/*{cardData.map(({all, percent, name}, index) =>*/}
                    <CardBox>
                        <Data>
                            <Icon
                                // color={percent > 0}
                            >
                                <UpDown/>
                            </Icon>
                            <Numbers>
                                <Main>
                                    {dashboard.total}
                                </Main>
                                <Secondary
                                    // color={percent > 0}
                                >
                                    {/*{percent > 0 ? "+" : ""}{percent}%*/}
                                </Secondary>
                            </Numbers>
                        </Data>
                        <CardTitle>Total number of students</CardTitle>
                    </CardBox>
                    <CardBox>
                        <Data>
                            <Icon
                                // color={percent > 0}
                            >
                                <UpDown/>
                            </Icon>
                            <Numbers>
                                <Main>
                                    {dashboard.stopped}
                                </Main>
                                <Secondary
                                    // color={percent > 0}
                                >
                                    {/*{percent > 0 ? "+" : ""}{percent}%*/}
                                </Secondary>
                            </Numbers>
                        </Data>
                        <CardTitle>Course stopped students</CardTitle>
                    </CardBox>
                    <CardBox>
                        <Data>
                            <Icon
                                // color={percent > 0}
                            >
                                <UpDown/>
                            </Icon>
                            <Numbers>
                                <Main>
                                    {dashboard.graduated}
                                </Main>
                                <Secondary
                                    // color={percent > 0}
                                >
                                    {/*{percent > 0 ? "+" : ""}{percent}%*/}
                                </Secondary>
                            </Numbers>
                        </Data>
                        <CardTitle>Course graduated students</CardTitle>
                    </CardBox>
                    <CardBox>
                        <Data>
                            <Icon
                                // color={percent > 0}
                            >
                                <UpDown/>
                            </Icon>
                            <Numbers>
                                <Main>
                                    {dashboard.freshman}
                                </Main>
                                <Secondary
                                    // color={percent > 0}
                                >
                                    {/*{percent > 0 ? "+" : ""}{percent}%*/}
                                </Secondary>
                            </Numbers>
                        </Data>
                        <CardTitle>New students for academy</CardTitle>
                    </CardBox>
                    {/*)}*/}

                </TopCardsBox>
            </TopCardsWrapper>
            <DisplayFlex>

                {/*<CardStudentNumber>*/}
                {/*    {courseStudentData.map(({categoryName, numberOfStudents, courses}) =>*/}
                {/*        <>*/}
                {/*            <Category>{categoryName} <small>{numberOfStudents}</small></Category>*/}
                {/*            <Line>*/}
                {/*                {courses.map(({courseName, numberOfStudent, color}) =>*/}
                {/*                    <InsideLine width={(numberOfStudent / numberOfStudents * 100) + "%"}*/}
                {/*                                color={getRandomColor}>*/}
                {/*                        <CourseNumber className={"course"}>*/}
                {/*                            <p>*/}
                {/*                                {courseName}*/}
                {/*                            </p>*/}
                {/*                            <p>*/}
                {/*                                {numberOfStudent}*/}
                {/*                            </p>*/}
                {/*                        </CourseNumber>*/}
                {/*                    </InsideLine>*/}
                {/*                )}*/}
                {/*            </Line>*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</CardStudentNumber>*/}
                <ChartBox width={"65.5%"} id={"students-chart"}>
                    <ChartNavbarBox>
                        <ChartNavs>
                            {courseCategories?.map(((value) =>
                                    <ChartNav key={value.id} clicked={selectedCategory.id === value.id}
                                              onClick={() => {
                                                  setSelectedCategory(value);
                                                  // barCharData()
                                              }}>
                                        {value.categoryName}
                                    </ChartNav>
                            ))}
                        </ChartNavs>
                    </ChartNavbarBox>


                    <ChartTitle>Students of {selectedCategory.categoryName}</ChartTitle>
                    <BarChart
                        width={
                            (document.getElementById("students-chart")?.clientWidth) - 20
                            // width > 1150 ? 630 : width > 900 ? 780 : width > 700 ? 580 : width > 600 ? 480 : 300
                        }
                        height={200}
                        data={
                            // selectedCategory.data.data
                            courseData
                        }
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        {/*<Bar dataKey="pv" fill="#8884d8"/>*/}
                        <Bar legendType={"none"} dataKey="uv" fill="#ffbf2b"/>
                    </BarChart>
                </ChartBox>
                {/*<ChartBox pieChart>*/}
                {/*    <Center>*/}
                {/*        <PieChart width={250} height={250}>*/}
                {/*            <Pie*/}
                {/*                dataKey="value"*/}
                {/*                isAnimationActive={false}*/}
                {/*                data={data01}*/}
                {/*                cx="50%"*/}
                {/*                cy="50%"*/}
                {/*                outerRadius={60}*/}
                {/*                fill="#ffbf4b"*/}
                {/*                label={{color: "black"}}*/}
                {/*            />*/}
                {/*            <Pie dataKey="value" data={data02} cx={400} cy={200} innerRadius={30} outerRadius={80}*/}
                {/*                 fill="#82ca9d"/>*/}
                {/*            <Tooltip/>*/}
                {/*            <LabelList/>*/}
                {/*        </PieChart>*/}
                {/*    </Center>*/}

                {/*</ChartBox>*/}
            </DisplayFlex>

        </DashboardPageWrapper>
    )
}

export default Dashboard