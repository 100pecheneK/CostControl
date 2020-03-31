import React, {Component} from 'react'
import Calendar from 'react-calendar'
import './my-calendar.css'
import {changeDate} from "../../actions/calendar"
import {connect} from "react-redux"
import {getTodos} from "../../actions/todos"

class MyCalendar extends Component {

    componentDidMount() {
        const date = new Date()
        console.log('componentDidMount', date)
        this.props.changeDate(date, '')
    }

    formatDate(date, dateRange) {
        let template
        switch (dateRange) {
            case 'day':
                template = 'DD-MM-YYYY'
                break
            case 'month':
                template = 'DD-MM'
                break
            case 'year':
                template = template = 'DD'
                break
        }
        let specs = 'YYYY-MM-DD'.split('-')
        date = new Date(date)
        return date
            .toLocaleDateString()
            .split(/[-:.TZ]/)
            .reduceRight((template, item, i) => {
                return template
                    .split(specs[i])
                    .join(item)
            }, template)
    }

    changeDate = (date, dateRange) => {
        const dateToServer = this.formatDate(date, dateRange)
        this.props.changeDate(date, dateToServer)
        this.props.getTodos()
    }


    render() {
        const date = this.props.calendar
        return (
            <Calendar
                onClickMonth={date => this.changeDate(date, 'month')}
                onClickYear={date => this.changeDate(date, 'year')}
                onChange={date => this.changeDate(date, 'day')}
                value={date[0]}
            />
        )
    }
}


const mapStateToProps = state => ({
    calendar: Object.values(state.calendar)
})


export default connect(
    mapStateToProps,
    {changeDate, getTodos}
)(MyCalendar)
