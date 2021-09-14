import React from "react";

//icons
import {ReactComponent as Cash} from "../assets/icons/cash.svg"
import {ReactComponent as Card} from "../assets/icons/card.svg"
import {ReactComponent as Payme} from "../assets/icons/payme.svg"


export const paymentTypeIcon=(type)=>{
    switch (type) {
        case "cash":
            return <Cash/>
        case "card":
            return <Card/>
        case "payme":
            return <Payme/>
        default:
            return null
    }
}