import React from 'react';
import ReactDOM from 'react-dom';
import {Animated} from "react-animated-css";

const Modal = props => {

    return ReactDOM.createPortal(
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div onClick={props.onDismiss} className='ui active dimmer'>
                <div onClick={e => e.stopPropagation()} className='ui active modal'>
                    <div className='header'>{props.title}</div>
                    <div className='content'>{props.content}</div>
                    <div className='actions'>{props.actions}</div>
                </div>
            </div>
        </Animated>,
        document.querySelector('#modal')
    );
};

export default Modal;
