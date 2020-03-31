import MyCalendar from "../my-calendar/my-calendar"
import Dashboard from "../todos"
import React from "react"

const HomePage = () => {
    return (
        <React.Fragment>
            <MyCalendar/>
            <Dashboard/>
        </React.Fragment>
    )
}

export default HomePage