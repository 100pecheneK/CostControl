import React from "react"
import Column from "../containers/column"
import MyCalendar from "./my-calendar"

const Calendar = (props) => {
    const content = (
        <MyCalendar {...props}/>
    )
    return (
        <Column content={content}/>
    )
}

export default Calendar