import React, { useState } from 'react'
import './DateInput.css'

const DateInput = (props) => {
    const [valid, setValid] = useState("label-default");
    const [validBottom, setValidBottom] = useState("bottom-border-default");
    const [textInput, setTextInput] = useState('');
    
    const handleClick = () => {
        if ((/^[\d{1}]+[-]+[\d{1}]+[-]+[\d{3}]*$/.test(textInput))){
            console.log("yay");
            setValid("label-valid");
            setValidBottom("bottom-border-valid");
        }
        else{
            console.log("error");
            setValid("label-invalid");
            setValidBottom("bottom-border-invalid");
        }
    }

    const handleChange = (event) => {
        setTextInput(event.target.value);
    }

    return (
        <div>
            <div className="input-container">
                <span className = {valid}>{props.inputTitle}</span>
                <input 
                    className="input-area" 
                    type="date" 
                    name="date" 
                    onChange ={handleChange}
                    required/>
                <div className = {validBottom}></div>
            </div>
            <div>
                <button onClick = {handleClick}></button>
            </div>
        </div>
    )
}
export default DateInput;