import React, {Component} from "react"
import './cost-item.css'
import {connect} from "react-redux"
import {deleteCost} from "../../../../../../actions/costs"
import {getUserMoneyInfo} from "../../../../../../actions/user"

class CostItem extends Component {

    onDelete = (id) => {
        this.props.deleteCost(id)
        this.props.getUserMoneyInfo()
    }

    render() {
        const {id, category: {category: category, icon: icon}, cost, created_at} = this.props.item
        return (
            <div className="item">
                <i className={`${icon} icon`}/>
                <div className="content">
                    <div className="header costs">
                        <span className="ruble">{cost}</span>
                        <div className='right'>
                            <span className="date">{created_at}</span>
                            <button onClick={() => this.onDelete(id)} className="ui icon button delete">
                                <i className="fas fa-times"/>
                            </button>
                        </div>
                    </div>
                    <div className="description">{category}</div>

                </div>
            </div>
        )
    }
}

export default connect(
    null,
    {deleteCost, getUserMoneyInfo}
)(CostItem)