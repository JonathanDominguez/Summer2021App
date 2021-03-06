import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css'
import resumeImage from '../../images/sample.png'
import Background from './background/Background'

const LandingPage = () => {
    return(
        <div> 
            <Background/>
            {/* image */}
            <div className="resume-container">
                <div className="resume-item">
                    <div className = "image-div">
                        <div className = "center-image-div">
                            <img src={resumeImage} className = "image" alt ="resume"/>
                        </div>
                    </div>
                </div>
                <div className="resume-item">
                    <div className = "text-info">
                        <div className = "text">
                            <p>You input.</p>
                            <p>We generate.</p>
                            <Link to = "/OptionPage" className = "start-button" >Build Resume/ Cover Letter Now</Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default LandingPage

