import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCost} from "../../../../../../actions/costs"
import CostForm from "../cost-form/cost-form"
import {Link} from "react-router-dom"
import Modal from "../../../../../modal/modal"
import history from "../../../../../../history"
import {getUserMoneyInfo} from "../../../../../../actions/user"

class CostCreate extends Component {
    onSubmit = formValues => {
        this.props.addCost(formValues)
        this.props.getUserMoneyInfo()
    }

    renderContent() {
        return <CostForm destroyOnUnmount={false} onSubmit={this.onSubmit}/>
    }

    renderActions() {
        return <Link to='/' className='ui button'>Cancel</Link>
    }

    render() {
        return (
            <Modal
            title='Создание расхода'
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={()=>history.push('/')}
            />
        );
    }
}

export default connect(
    null,
    {addCost, getUserMoneyInfo}
)(CostCreate)