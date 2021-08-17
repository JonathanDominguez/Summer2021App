import React from 'react'
import { Link } from 'react-router-dom';
import './templates.css'
import Background from '../../landing-page/background/Background'
// Images
import tempOne from '../../../images/resumeTemp/tempOne.png'
import tempTwo from '../../../images/resumeTemp/tempTwo.png'
import tempThree from '../../../images/resumeTemp/tempThree.png'


export default function templates() {
    return (
        <div>
            <Background/>
            <div className="temp-container">
                <div className="selection-container">
                    <div className="selection-item">
                            <Link to = "/PDF">
                                <img 
                                    alt = 'tempOne'
                                    src = {tempOne} 
                                    className = "image-details">
                                </img>
                            </Link>
                        {/* <Link to = "/PDF">
                            <img 
                                alt = 'tempOne'
                                src = {tempOne} 
                                className = "image-details">
                            </img>
                        </Link> */}
                        {/* <img 
                            alt = 'tempOne'
                            src = {tempOne} 
                            className = "image-details">
                        </img> */}
                    </div>
                    <div className="selection-item">
                    <Link to = "/PDF">

                        <img 
                            alt = 'tempThree'
                            src = {tempTwo} 
                            className = "image-details">
                        </img>
                    </Link>
                    </div>
                    <div className="selection-item">
                        <img 
                            alt = 'tempThree'
                            src = {tempThree} 
                            className = "image-details">
                        </img>
                    </div>  
                </div>
                {/* <Link to = "/PDF" className = "button-type">Resume</Link> */}
            </div>

        </div>
    )
}
