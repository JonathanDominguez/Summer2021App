import React, { useState } from 'react'
import './ProgressBar.css'

export default function ProgressBar() {
    const [count, setCount] = useState(0);
    let backValue = '';
    let nextValue  = '';

    function addOne (){
        if(count === 5){
            nextValue = true;
        }
        else{
            setCount(count + 1)
        }
    }
    function minusOne (){
        if(count === 0){
            backValue = true;
        }
        else{
            setCount(count - 1)
        }
    }

    return (
        <div className = "main-container">
            {/* Progress Bar  */}
            <div  className = "container">
                <div className = "progress-container">
                    <div className = {count ===0 ? "section-large" : "section-small"}>
                        <div className = "section-number-blue"><p className = "num-section">1</p></div>
                        <p className = {count >=0 ? "title-blue" : "title-grey"}>Heading</p>
                        <div className = {count === 0 ? "line-large" : "line-small"}></div>
                    </div>
                    <div className = {count === 1 ? "section-large" : "section-small"}>
                        <div className = {count >=1 ? "section-number-blue" : "section-number-grey"}><p className = "num-section">2</p></div>
                        <p className = {count >=1 ? "title-blue" : "title-grey"}>Education</p>
                        <div className = {count === 1 ? "line-large" : "line-small"}></div>
                    </div>
                    <div className = {count === 2 || count === 3 || count === 4 ? "section-large" : "section-small"}>
                        <div className = {count >=2 ? "section-number-blue" : "section-number-grey"}><p className = "num-section">3</p></div>
                        <p className = {count >=2 ? "title-blue" : "title-grey"}>Experience</p>
                        {/* line */}
                        <div className = {count === 2 || count === 3 || count === 4? "line-large" : "line-small"}>
                            <div className = {4 >= count && count >= 2? "show-levels" : "display-none"}>
                                <p className = {count >= 2 ? "show-blue" : "show-grey"}>Experience 1</p>
                                <p className = {count >= 3 ? "show-blue" : "show-grey"}>Experience 2</p>
                                <p className = {count >= 4 ? "show-blue" : "show-grey"}>Experience 3</p>  
                            </div>
                        </div>                    
                    </div>
                    <div className = {count === 5 ? "section-large" : "section-small"}>
                        <div className = {count >=5 ? "section-number-blue" : "section-number-grey"}><p className = "num-section">4</p></div>
                        <p className = {count >=5 ? "title-blue" : "title-grey"}>Skills</p>
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className = "button-container">
                <div className="grid-container">
                    <div className="grid-item">
                        <button className = "button-type" onClick={minusOne} disabled={backValue}>Back</button>
                    </div>
                    <div className="grid-item">
                        <button className = "button-type" onClick={addOne} disabled={nextValue}>Continue</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}
