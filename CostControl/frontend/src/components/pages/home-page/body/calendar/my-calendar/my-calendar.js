import React, {Component} from 'react'
import Calendar from 'react-calendar'
import './my-calendar.css'
import {connect} from "react-redux"
import {getCosts} from "../../../../../../actions/costs"
import {getReport} from "../../../../../../actions/report"
import {changeDate, initializeDate} from "../../../../../../actions/calendar"
import {formatDate} from "../utils"

class MyCalendar extends Component {

    componentDidMount() {
        this.props.initializeDate()
    }

    changeDate = (date, dateRange) => {
        const dateToServer = formatDate(date, dateRange)
        this.props.changeDate(date, dateToServer)
        switch (this.props.data) {
            case 'cost':
                this.props.getCosts()
                break
            case 'report':
                this.props.getReport()
                break
        }
    }


    render() {
        return (
            <Calendar
                className="myCalendar"
                onClickMonth={date => this.changeDate(date, 'month')}
                onClickYear={date => this.changeDate(date, 'year')}
                onChange={date => this.changeDate(date, 'day')}
                value={this.props.calendar[0]}
            />

        )
    }
}


const mapStateToProps = state => ({
    calendar: Object.values(state.calendar)
})


export default connect(
    mapStateToProps,
    {initializeDate, changeDate, getCosts, getReport}
)(MyCalendar)
