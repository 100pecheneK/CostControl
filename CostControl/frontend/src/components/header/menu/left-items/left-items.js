import React from "react"
import {IconContainer, MoneyContainer} from "../items-containers"
import './left-items.css'

const LeftItems = () => {
    return (
        <div className="left-items">
            <MoneyContainer
                header="Баланс"
                description="20 000"/>
            <MoneyContainer
                header="Расходы"
                description="20 000"/>
            <IconContainer
                icon="fas fa-wallet"/>
        </div>
    )
}

export default LeftItems