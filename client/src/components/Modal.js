import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className='ui standard modal visible active'>
                <div 
                onClick={e=>e.stopPropagation()}
                className='header'>{props.title}</div>
                <div className="content">
                   {props.content}
                </div>
                <div className='actions'>
                    {props.actions}
                </div>
            </div>
        </div>,
    document.querySelector('#modal')
    );
};

export default Modal;