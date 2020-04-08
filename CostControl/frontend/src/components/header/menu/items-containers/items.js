import React from "react"
import './items.css'
import {Link} from "react-router-dom"

export const MoneyContainer = ({description, header}) => {
    return (
        <div className="item money">
            <div className="description ruble">{description}</div>
            <div className="header">{header}</div>
        </div>
    )
}
export const IconContainer = ({to='#', className = '', icon, content = null}) => {
    return (
        <Link to={to} className={`item ${className}`}><i className={`${icon}`}/>{content}</Link>
    )
}