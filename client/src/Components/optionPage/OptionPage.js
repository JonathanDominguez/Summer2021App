import React from 'react';
import { Link } from 'react-router-dom';
import './OptionPage.css';
import Background from '../landing-page/background/Background';
import resumeImage from '../../images/sample.png'

export default function OptionPage() {
    return (
        <div className = 'background'>
            <Background/>
            <div className = "main">
                <div className="main-container">
                    <div className="main-item">
                        <div className = "text-container">
                            <p className = "heading-text">Which would you like to work on?</p>
                        </div>
                    </div>
                    <div className="main-item">
                        <div className="options-container">
                            <div className="options-item">
                                <div className="image-container">
                                    <div className="image-item">
                                        <img src={resumeImage} className = "image-edit" alt ="resume"/>
                                    </div>
                                    <div className="image-item">
                                        <Link to = "/ResumeTemplates" className = "button-type">Resume</Link>
                                    </div> 
                                </div>
                            </div>
                            <div className="options-item">
                                <div className="image-container">
                                    <div className="image-item">
                                        <img src={resumeImage} className = "image-edit" alt ="resume"/>
                                    </div>
                                    <div className="image-item">
                                        <Link to = "/PDF" className = "button-type">Cover Letter</Link>
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
