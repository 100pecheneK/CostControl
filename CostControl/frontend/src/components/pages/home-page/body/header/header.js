import React, {Component} from "react"
import './header.css'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import {formatDate} from "../calendar/utils"


class Header extends Component {

    getHeaderDate(date1, date2) {
        const date = new Date(date1)
        const calendarDate = new Date(date2)
        const range = Math.ceil(calendarDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
        switch (range) {
            case 0:
                return 'сегодня'
            case -1:
                return 'вчера'
            case -2:
                return 'позавчера'
            default:
                return date2
        }
    }

    render() {
        const calendarDate = this.props.calendarDate
        const date = formatDate(new Date(), 'day')

        const headerDate = this.getHeaderDate(date, calendarDate)

        const {title, action} = this.props

        return (
            <div className="header menu costs-header">
                <div className="ui item">
                    <span>{title} <span className="meta"> за {headerDate}</span></span>
                </div>
                {action}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        calendarDate: state.calendar.dateToServer
    }
}

export default connect(
    mapStateToProps,
    null
)(Header)