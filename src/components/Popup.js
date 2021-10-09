import React from 'react';
import Otp from './Otp';
import './Popup.css';
import './Otp.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick = { () => props.setTrigger(false)}>X</button>
                {props.children}
            
            <Otp />
            </div>
        </div>
    ) : ""; 
}

export default Popup;
