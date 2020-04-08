import React, {Component} from 'react'
import {connect} from 'react-redux'
import BalanceForm from '../balance-form'
import {Link} from "react-router-dom"
import Modal from "../../../../modal/modal"
import {addBalance} from "../../../../../actions/user"
import history from "../../../../../history"

class AddBalance extends Component {
    onSubmit = formValues => {
        this.props.addBalance(formValues)
    }

    renderContent() {
        return <BalanceForm destroyOnUnmount={false} onSubmit={this.onSubmit}/>
    }

    renderActions() {
        return <Link to='/' className='ui button'>Отмена</Link>
    }

    render() {
        return (
            <Modal
                title='Увеличение баланса'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

export default connect(
    null,
    {addBalance}
)(AddBalance)