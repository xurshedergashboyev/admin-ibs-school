import React from "react"
import {
    HideToggleBox, HideToggleIcon, HideToggleText,
    InnerNav,
    InnerNavs,
    Nav,
    NavbarLogo,
    NavbarLogoBox,
    NavbarWrapper,
    NavName,
    Navs
} from "./styles";

//icon
import {ReactComponent as Arrow} from "../../assets/icons/arrow.svg"

//logo
import logo from "../../assets/images/ibs.png"
// import halfLogo from "../../assets/images/ibs-logo.png"

const LeftNavbar = ( { nav, hidden, setHidden} ) => {
  return (
    <NavbarWrapper>
      <NavbarLogoBox hide={hidden} to={"/"}>
            <NavbarLogo hide={hidden}>
                <img src={ logo } alt=""/>
            </NavbarLogo>
        </NavbarLogoBox>
      <Navs>
        {
          nav.map( ( { link, name, icon, navs } ) => (
            <Nav to={ navs?.length>0 ? navs[0]?.link : link} key={name} hide={hidden}>
              <NavName className={"nav"} hide={hidden}>
                {icon && <img src={icon} alt={"icon"}/>}
                <p>
                  { name }
              </p>
              </NavName>
                {!hidden &&
              <InnerNavs className={"innerNavs"}>
                { navs?.map( ( { link, name, icon } ) =>
                  <InnerNav width={100/navs.length} key={name} to={ link }>
                      <img src={icon} alt="icon"/><p>{ name }</p>
                  </InnerNav>
                ) }
              </InnerNavs>}
            </Nav>
          ) )
        }
      </Navs>
      <HideToggleBox hide={hidden} onClick={setHidden}>
          <HideToggleText hide={hidden}>
              Tap here to toggle
          </HideToggleText>
          <HideToggleIcon hide={hidden}>
              <Arrow/>
          </HideToggleIcon>
      </HideToggleBox>
    </NavbarWrapper>
  )
}

export default LeftNavbar