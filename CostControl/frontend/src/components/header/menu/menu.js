import React from "react"
import LeftItems from "./left-items"
import RightItems from "./right-items"
import './menu.css'

const Menu = () => {
    return (
        <div className="ui borderless menu header-menu">
            <div className="ui container">
                <LeftItems/>
                <RightItems/>
            </div>
        </div>
    )
}

export default Menu