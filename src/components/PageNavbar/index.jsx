import React from "react"
import { PageNav, PageNavs, WrapperPageNavbar } from "./styles";
import { Link } from "react-router-dom";

const PageNavbar = ({navs}) => {
  return (
    <WrapperPageNavbar>
      <PageNavs>
        {
          navs?.map((navData=>
              <PageNav to={navData.link} key={navData.name}>
                { navData.name }
              </PageNav>
          ))
        }
      </PageNavs>
    </WrapperPageNavbar>
  )
}

export default PageNavbar