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
                        <Link to='/report' className='item'>
                            <i className='chart pie icon'/>
                        </Link>
                    )
                }}/>
                <Route exact path='/report' render={() => {
                    return (
                        <Link to='/' className='item'>
                            <i className="fas fa-home"/>
                        </Link>
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