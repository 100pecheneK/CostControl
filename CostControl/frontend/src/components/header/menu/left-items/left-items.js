import React, {Component} from "react"
import {IconContainer, MoneyContainer} from "../items-containers"
import './left-items.css'
import {connect} from "react-redux"
import {getUserMoneyInfo} from "../../../../actions/user"
class LeftItems extends Component {
    componentDidMount() {
        this.props.getUserMoneyInfo()
    }

    render() {
        const {balance, month_cost} = this.props.user
        return (
                <div className="left-items">
                    <MoneyContainer
                        header="Баланс"
                        description={balance}/>
                    <MoneyContainer
                        header="Расходы"
                        description={month_cost}/>
                    <IconContainer
                        to='/add_balance'
                        icon="fas fa-wallet"/>
                </div>

        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(
    mapStateToProps,
    {getUserMoneyInfo}
)(LeftItems)