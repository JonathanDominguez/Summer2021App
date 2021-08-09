import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../landing-page/background/Background';
import './OptionPage.css';
import resumeImage from '../../images/sample.png'

export default function OptionPage() {
    return (
        <div>
            <Background/>
            <div className = "main-contain">
                <div className="main-container">
                    <div className="main-item">
                        <div className = "text-box">
                            <p className = "heading-text">Which would you like to work on?</p>
                        </div>
                    </div>
                    <div className="main-item">
                        <div className="download-container">
                            <div className="download-item">
                                <div className="image-container">
                                    <div className="image-item">
                                        <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                    </div>
                                    <div className="image-item">
                                        <Link to = "/PDF" className = "start-button">Resume</Link>
                                    </div> 
                                </div>
                            </div>
                            <div className="download-item">
                                <div className="image-container">
                                    <div className="image-item">
                                        <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                    </div>
                                    <div className="image-item">
                                        <button className = "button-type">Cover Letter</button>
                                    </div> 
                                </div>                                       
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
