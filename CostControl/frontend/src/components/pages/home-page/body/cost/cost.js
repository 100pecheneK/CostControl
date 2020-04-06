import CostsList from "./costs-list"
import React from "react"
import Header from "../header"
import Calendar from "../calendar"
import Column from "../containers/column"
import {Link} from "react-router-dom"
import BodyContainer from "../body"

const Cost = () => {
    const action = (
        <div className="ui item">
            <Link to='/create' className="ui icon button blue">
                <i className="plus icon"/>
            </Link>
        </div>
    )
    const left = (
        <React.Fragment>
            <Header title='Расходы' action={action}/>
            <CostsList/>
        </React.Fragment>
    )
    return (
        <BodyContainer component={
            <React.Fragment>
                <Column content={left}/>
                <Calendar data='cost'/>
            </React.Fragment>
        }/>


    )
}

export default Cost