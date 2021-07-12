import React from 'react'
import './DownloadVersion.css'
import resumeImage from '../../images/sample.png'

const DownloadVersion = () => {
    return (
        <div>
            <div className="main-container">
                <div className="main-item">
                    <p className = "heading-text">How would you like to export your work?</p>
                </div>
                <div className="main-item">
                    <div className="download-container">
                        <div className="download-item">
                            <div className="image-container">
                                <div className="image-item">
                                    <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                </div>
                                <div className="image-item">
                                    <button className = "button-type">PDF</button>
                                </div> 
                            </div>
                        </div>
                        <div className="download-item">
                            <div className="image-container">
                                <div className="image-item">
                                    <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                </div>
                                <div className="image-item">
                                    <button className = "button-type">Microsoft Word</button>
                                </div> 
                            </div>                                       
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DownloadVersion