import React, { useState } from 'react'
import './Input.css'

const Input = (props) => {
    const [valid, setValid] = useState("label-default");
    const [validBottom, setValidBottom] = useState("bottom-border-default");
    const [textInput, setTextInput] = useState('');
    
    const handleClick = () => {
        if (textInput !== ''){
            console.log("Text in input");
            setValid("label-valid");
            setValidBottom("bottom-border-valid");
        }
        else{
            console.log("No text");
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
                    type="text" 
                    name="email" 
                    onChange={handleChange}
                    placeholder={props.placeholderText} 
                    required/>
                <div className = {validBottom}></div>
            </div>
            <div>
                <button onClick = {handleClick}></button>
            </div>
        </div>
    )
}

export default Input;