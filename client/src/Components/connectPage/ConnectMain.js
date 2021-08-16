import React, { useState } from 'react';
import './ConnectMain.css';

export default function ConnectMain() {
    const [clickedMessage, setClickedMessage] = useState(true)

    const changeStatus = () =>{
        setClickedMessage(!clickedMessage)
        console.log(clickedMessage)
    }

    return (
        <div>
            <div className="main-contact-container">
                {/* Unused Space */}
                <div className="main-contact-item">
                    <p>unused</p>
                </div>
                {/* Main area */}
                <div className="main-contact-item">
                    <p>main</p>
                </div>
                {/* Message */}
                <div className="main-contact-item">
                    <button onClick = {changeStatus} className = "message-button">
                        <div className = {clickedMessage ? "message-container-no" : ""}>
                            <div className = "message-heading">

                            </div>
                            <div className = "messages-body">

                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}