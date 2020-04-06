import React, {Component} from "react"
import LeftItems from "./left-items"
import RightItems from "./right-items"
import './menu.css'
import {connect} from "react-redux"
import {logout} from "../../../actions/auth"
import {Link} from "react-router-dom"

class Menu extends Component {
    render() {
        const {user, isAuthenticated} = this.props.auth
        const userLinks = (
            <React.Fragment>
                <LeftItems/>
                <RightItems/>
            </React.Fragment>
        )
        const guestLinks = (
            <React.Fragment>
                <Link to='/register' className='item'>
                    Регистрация
                </Link>
                <Link to='/login' className='item'>
                    Вход
                </Link>
            </React.Fragment>
        )
        return (
            <div className="ui borderless menu header-menu">
                <div className="ui container">
                    {isAuthenticated ? userLinks : guestLinks}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    {logout}
)(Menu)