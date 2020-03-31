import React, {Component} from "react"
import CostItem from "../cost-item"
import {connect} from 'react-redux'
import {getCosts} from "../../../../../../actions/costs"

class CostsList extends Component {
    componentDidMount() {
        this.props.getCosts()
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.props.costs.slice(0).reverse().map(item => (
                    <CostItem
                        key={item.id}
                        item={item}
                    />))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    costs: Object.values(state.costs)
})

export default connect(
    mapStateToProps,
    {getCosts}
)(CostsList)
