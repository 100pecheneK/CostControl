import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
    const {title, content, actions} = props
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className='ui active dimmer'>
            <div onClick={e => e.stopPropagation()} className='ui active modal'>
                <div className='header'>{title}</div>
                <div className='header'>{content}</div>
                <div className='header'>{actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}
export default Modal