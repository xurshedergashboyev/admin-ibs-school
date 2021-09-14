import React from "react"
import {Add, NavbarBox, PageTitle} from "./styles";
import {ReactComponent as PlusIcon} from "../../assets/icons/plus-img.svg";

const PageTitleAdd = ({title, link}) => {
    return (
        <NavbarBox>
            <PageTitle>
                {title}
            </PageTitle>
            <Add to={link}><PlusIcon/></Add>
        </NavbarBox>
    )
}

export default PageTitleAdd