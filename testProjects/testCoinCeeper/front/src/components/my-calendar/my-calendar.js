import React, { Component } from 'react'
import {Calendar} from 'react-calendar'
// import './my-calendar.css'


export default class MyCalendar extends Component {
    state = {
        date: new Date(),
        dateToServer: null
    }

    onChange = date => {
        return this.setState({
            date,
            dateToServer: this.formatDate(date, 'day')
        })
    }

    onMonthClick = date => {
        return this.setState({
            date,
            dateToServer: this.formatDate(date, 'month')
        })
    }

    onYearClick = date => {
        return this.setState({
            date,
            dateToServer: this.formatDate(date, 'year')
        })
    }

    formatDate(date, template) {
        switch (template) {
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

    render() {
        return (
            <div>
                <div>
                    <Calendar
                        className={'customCalendar'}
                        onClickMonth={this.onMonthClick}
                        onClickYear={this.onYearClick}
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
                <h1>{this.state.dateToServer}</h1>
            </div>

        )
    }
}
