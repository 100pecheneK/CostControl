import React from "react"
import './items.css'

export const MoneyContainer = ({description, header}) => {
    return (
        <div className="item money">
            <div className="description ruble">{description}</div>
            <div className="header">{header}</div>
        </div>
    )
}
export const IconContainer = ({className = '', icon, content = null}) => {
    return (
        <span className={`item ${className}`}><i className={`${icon}`}/>{content}</span>
    )
}