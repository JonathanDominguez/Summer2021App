import React, { useState } from 'react';
import './ConnectMain.css';

import Feed from './feed/Feed'
import Message from './message/Message'

export default function ConnectMain() {

    return (
        <div>
            <div className="main-contact-container">
                {/* Unused Space */}
                <div className="main-contact-item">
                    <p>unused</p>
                </div>
                {/* Main area */}
                <div className="main-contact-item">
                    <Feed/>
                </div>
                {/* Message */}
                <div className="main-contact-item">
                    <Message/>
                </div>
            </div>
        </div>
    )
}