import React, { useState } from 'react'
import './EmailInputTag.css'

const EmailInputTag = () => {
    const [valid, setValid] = useState("label-default");
    const [validBottom, setValidBottom] = useState("bottom-border-default");
    const [textInput, setTextInput] = useState('');
    
    const handleClick = () => {
        if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(textInput))){
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
                <span className = {valid}>Email</span>
                <input 
                    className="input-area" 
                    type="text" 
                    name="email" 
                    onChange={handleChange}
                    placeholder="Enter your email address" 
                    required/>
                <div className = {validBottom}></div>
            </div>
            <div>
                <button onClick = {handleClick}></button>
            </div>
        </div>
    )
}
export default EmailInputTag;