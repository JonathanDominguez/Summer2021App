import React from 'react';
import './ConnectMain.css';
import Background from '../landing-page/background/Background'
import Login from './login/Login'
import Feed from './feed/Feed'
import Message from './message/Message'
import SearchBar from './search/SearchBar'

export default function ConnectMain() {

    return (
        <div>
            <Background/>
            {/*  
            <div className="main-contact-container">
                <div className="main-contact-item">
                    <SearchBar/>
                </div>
                Main area
                <div className="main-contact-item">
                    <SearchBar/>
                    <Feed/>
                </div>
                Message
                <div className="main-contact-item">
                    <Message/>
                </div>
            </div>
            */}
            <div className = "login">
                <Login/>
            </div>
        </div>
    )
}