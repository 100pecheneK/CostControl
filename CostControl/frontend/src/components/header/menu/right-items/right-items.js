import React from "react"
import {IconContainer} from "../items-containers"
import {Link} from "react-router-dom"
import {Route} from 'react-router-dom'

const RightItems = () => {
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
                        <div className="header">Миша</div>
                        <div className="item">Выход</div>
                    </div>
                )}/>
        </div>
    )
}

export default RightItems