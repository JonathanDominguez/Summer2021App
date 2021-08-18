import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './templates.css'
import Background from '../../landing-page/background/Background'
import ExpandImage from './expandImage/ExpandImage'
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { IoExpandSharp } from "react-icons/io5";
// Images
import tempOne from '../../../images/resumeTemp/tempOne.png'
import tempTwo from '../../../images/resumeTemp/tempTwo.png'
import tempThree from '../../../images/resumeTemp/tempThree.png'

const Templates = () => { 
    // States
    const [display, setDisplay] = useState({
        displayImage : false,
        imageNum:'' 
    });
    // Hooks
    const expandImageClick = (numIn) => {
        if(numIn === 1){
            setDisplay({
                displayImage: display,
                imageNum: tempOne,
            })
        }
        else if(numIn === 2){
            setDisplay({
                displayImage: display,
                imageNum: tempTwo,
            })
        }
        else if(numIn === 3){
            setDisplay({
                displayImage: display,
                imageNum: tempThree,
            })
        }
    }
    const expandImageDisable = () => {
        setDisplay({
            displayImage: false,
        })
    }

    return (
        <div>
            <Background/>
            <div className="center-container">
                <div className="temp-container">
                    {/* Main text */}
                    <div className="center-item">
                        <p className = "resume-text">Select a resume template</p>
                    </div>
                    {/* Images */}
                    <div className="center-item">
                        <div className="selection-container">
                            <div className="selection-item">
                                <Link to = "/PDF">
                                    <img 
                                        alt = 'tempOne'
                                        src = {tempOne} 
                                        className = "image-details">
                                    </img>
                                </Link>
                                <button className = "expand-image" onClick = { () => expandImageClick(3)}>
                                    <div className = "triangle-top-right">
                                        <IoExpandSharp className = "expand-icon"/>
                                    </div>
                                </button>
                            </div>
                            <div className="selection-item">
                                <Link to = "/PDF">
                                    <img 
                                        alt = 'tempTwo'
                                        src = {tempTwo} 
                                        className = "image-details">
                                    </img>
                                </Link>
                                <button className = "expand-image" onClick = { () => expandImageClick(3)}>
                                    <div className = "triangle-top-right">
                                        <IoExpandSharp className = "expand-icon"/>
                                    </div>
                                </button>
                            </div>
                            <div className="selection-item">
                                <Link to = "/PDF">
                                    <img 
                                        alt = 'tempThree'
                                        src = {tempThree} 
                                        className = "image-details">
                                    </img>
                                </Link>
                                <button className = "expand-image" onClick = { () => expandImageClick(3)}>
                                    <div className = "triangle-top-right">
                                        <IoExpandSharp className = "expand-icon"/>
                                    </div>
                                </button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className = {display.displayImage ? "display" : "display-none"}>
                <ExpandImage
                    data = {display}
                />
                <button  
                    onClick = {expandImageDisable} 
                    className = "button-exit">
                    <AiOutlineFullscreenExit
                        size={70}
                        className = "exit-icon"
                    />
                </button>
            </div>
        </div>
    )
}

export default Templates;