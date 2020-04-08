import React, {Component} from "react"
import {IconContainer} from "../items-containers"
import {Link} from "react-router-dom"
import {Route} from 'react-router-dom'
import {logout} from "../../../../actions/auth"
import {connect} from "react-redux"

class RightItems extends Component {
    render() {
        return (
            <div className="right menu">
                <Route exact path='/' render={() => {
                    return (
                        <IconContainer to='/report' icon='chart pie icon'/>
                    )
                }}/>
                <Route exact path='/report' render={() => {
                    return (
                        <IconContainer to='/' icon='fas fa-home'/>
                    )
                }}/>
                <IconContainer
                    className="ui simple dropdown"
                    icon="user icon"
                    content={(
                        <div className="menu">
                            <div className="header">{this.props.username}</div>
                            <div onClick={this.props.logout} className="item">Выход</div>
                        </div>
                    )}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.user.username
})

export default connect(
    mapStateToProps,
    {logout}
)(RightItems)