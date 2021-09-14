import React, {useState} from "react"
import PageNavbar from "../../components/PageNavbar";
import {Route} from "react-router-dom";
import AddCourse from "../../components/AddCourse";
import CoursesList from "../../components/CoursesList";
import {Button, Form, Input} from "../../components/Input/styles";
import {ImgLogo, LoginPageWrapper} from "./styles";
import LogoImg from "../../assets/images/ibs.png"
import axios from "axios";
import {link} from "../../baseLink/link";
import {httpRequest} from "../../util/httpRequest";

const LoginPage = ({setCheck}) => {

    const submit = (event) => {
        event.preventDefault()
        const {login, password} = event.target
        const form = {username: login.value, password: password.value}

        axios(httpRequest("login", "POST", form))
            // .post(`${link}/login`, form)
            .then((res) => {
                console.log(res)
                setCheck(true)
                localStorage.setItem("token", res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <LoginPageWrapper>
            <Form onSubmit={(e) => submit(e)}>
                <ImgLogo src={LogoImg} alt="Logo"/>
                <Input type={"text"} name={"login"} placeholder={"login"}/>
                <Input type={"password"} name={"password"} placeholder={"password"}/>
                <Button>Login</Button>
            </Form>
        </LoginPageWrapper>
    )
}

export default LoginPage