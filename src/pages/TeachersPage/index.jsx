import React, { useState } from "react"
import PageNavbar from "../../components/PageNavbar";
import { Route } from "react-router-dom";
import TeachersList from "../../components/TeachersList";
import AddTeacher from "../../components/AddTeacher";

const TeachersPage = () => {

  const navs = [
    {
      name: "List",
      link: "/teachers/list"
    },
    {
      name: "Add",
      link: "/teachers/add"
    },
  ]

  const [ editValue, setEditValue ] = useState( {} )

  return (
    <>
      <PageNavbar navs={ navs }/>
      <Route path={ "/teachers/list" }>
        <TeachersList setEditValue={ setEditValue }/>
      </Route>
      <Route path={ "/teachers/add" }>
        <AddTeacher editValue={ editValue }/>
      </Route>
    </>
  )
}

export default TeachersPage