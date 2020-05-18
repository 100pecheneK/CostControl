import React, {Component} from "react"
import './cost-item.css'
import {connect} from "react-redux"
import {deleteCost} from "../../../../../../actions/costs"
import {Animated} from "react-animated-css";

class CostItem extends Component {
    state = {
        isVisible: true
    }

    onDelete = (id) => {
        this.setState({
            isVisible: false
        })
        this.props.deleteCost(id)
    }


    render() {
        const {id, category: {category: category, icon: icon}, cost, created_at} = this.props.item
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={300} animationOutDuration={300}
                      isVisible={this.state.isVisible}
                      className="item">
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
            </Animated>

        )
    }
}

export default connect(
    null,
    {deleteCost}
)(CostItem)