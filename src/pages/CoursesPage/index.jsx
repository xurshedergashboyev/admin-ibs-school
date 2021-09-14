import React, { useState } from "react"
import PageNavbar from "../../components/PageNavbar";
import { Route } from "react-router-dom";
import AddCourse from "../../components/AddCourse";
import CoursesList from "../../components/CoursesList";

const CoursesPage = () => {

  const navs = [
    {
      name: "List",
      link: "/courses/list"
    },
    {
      name: "Add",
      link: "/courses/add"
    },
  ]

  const [ editValue, setEditValue ] = useState( {} )

  return (
    <>
      <PageNavbar navs={ navs }/>
      <Route path={ "/courses/list" }>
        <CoursesList setEditValue={ setEditValue }/>
      </Route>
      <Route path={ "/courses/add" }>
        <AddCourse editValue={ editValue }/>
      </Route>

    </>
  )
}

export default CoursesPage