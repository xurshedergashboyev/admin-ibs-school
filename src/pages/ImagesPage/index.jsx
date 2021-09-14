import React from "react"
import PageNavbar from "../../components/PageNavbar";
import { Route } from "react-router-dom";
import ImagesList from "../../components/ImagesList";
import AddImage from "../../components/AddImage";

const ImagesPage = () => {

  const navs=[
    {
      name:"Images",
      link:"/images/list"
    },
    {
      name:"Add",
      link:"/images/add"
    },
  ]

    return(
        <>
            <PageNavbar navs={navs}/>
            <Route path={"/images/list"} component={ImagesList}/>
            <Route path={"/images/add"} component={AddImage}/>

        </>
    )
}

export default ImagesPage