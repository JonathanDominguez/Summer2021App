import React from 'react'
import './LandingPage.css'
import resumeImage from '../../images/sample.png'


const LandingPage = () => {
    return(
        <div> 
            {/* image */}
            <div>
                    <img src={resumeImage} className = "center-image" alt ="resume"/>

            </div>
            {/* grid */}
            <div className = "main-grid-container">
                <div className = "triangle">
                </div>
                <div className = "right-side">
                <div className = "center-div">
                    <p>You input.</p>
                    <p>We generate.</p>
                    <button className = "start-button">Build Resume/ Cover Letter Now</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage