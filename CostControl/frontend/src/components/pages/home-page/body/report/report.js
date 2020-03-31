import React, {Component} from "react"
import {connect} from "react-redux"
import {getReport} from "../../../../../actions/report"
import {Link} from "react-router-dom"
import Calendar from "../calendar"
import Column from "../containers/column"
import Header from "../header/header"

class Report extends Component {
    componentDidMount() {
        this.props.getReport()
    }

    renderContent() {

    }

    renderActions() {
        return <Link to='/' className='ui button'>Cancel</Link>
    }

    render() {
        const left = (
            <React.Fragment>
                <Header title='Отчёт'/>
                {this.props.report.map(({category, total_cost}, i) => (
                <p key={i}>{category} - {total_cost}</p>
                ))}
            </React.Fragment>
        )

        return (
            <React.Fragment>
                <Column content={left}/>
                <Calendar data='report'/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    report: Object.values(state.report)
})
export default connect(
    mapStateToProps,
    {getReport}
)(Report)