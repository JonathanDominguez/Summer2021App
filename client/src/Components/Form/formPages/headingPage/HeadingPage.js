import React, { useState }from 'react'
// CSS
import './HeadingPage.css'

const Form = (props) => {
    // States
        // First Inputs
        const [valid, setValid] = useState("label-default");
        const [validBottom, setValidBottom] = useState("bottom-border-default");
        const [textInput, setTextInput] = useState('');
        // Second Inputs
        const [validTwo, setValidTwo] = useState("label-default");
        const [validBottomTwo, setValidBottomTwo] = useState("bottom-border-default");
        const [textInputTwo, setTextInputTwo] = useState('');
        // Third Inputs
        const [validThree, setValidThree] = useState("label-default");
        const [validBottomThree, setValidBottomThree] = useState("bottom-border-default");
        const [textInputThree, setTextInputThree] = useState('');
        // Fourth Input
        const [validFour, setValidFour] = useState("label-default");
        const [validBottomFour, setValidBottomFour] = useState("bottom-border-default");
        const [textInputFour, setTextInputFour] = useState('');
        // Allow to continue state
        const  [continueCheck, setContinueCheck] = useState(false);

    // Check all inputs are valid
    const allCheck = () => {
        let checkOne = handleClick()
        let checkTwo = handleClickTwo()
        let checkThree = handleClickThree()
        let checkFour = handleClickFour()

        if(checkOne === true && checkTwo === true && checkThree === true && checkFour === true){
            console.log('ya')
            setContinueCheck(true);


            console.log("true: " + continueCheck)
            // props.passCheck(continueCheck);
        }
        else{
            console.log('na')
            setContinueCheck(false);


            console.log("false: " + continueCheck)
            // props.passCheck(continueCheck);

        }
        console.log("bottom: " + continueCheck)
        props.passCheck(continueCheck);
    }

    // console.log("out: " + continueCheck)
    // props.passCheck(continueCheck);




    // Functions checking for input validity 
        // First Input
    const handleClick = () => {
        if (textInput !== ''){
            setValid("label-valid");
            setValidBottom("bottom-border-valid");
            return true;
        }
        else{
            setValid("label-invalid");
            setValidBottom("bottom-border-invalid");
            return false;
        }
    }
    const handleChange = (event) => {
        setTextInput(event.target.value);
    }
    // Second input
    const handleClickTwo = () => {
        if (textInputTwo !== ''){
            setValidTwo("label-valid");
            setValidBottomTwo("bottom-border-valid");
            return true;
        }
        else{
            setValidTwo("label-invalid");
            setValidBottomTwo("bottom-border-invalid");
            return false
        }
    }
    const handleChangeTwo = (event) => {
        setTextInputTwo(event.target.value);
    }
    // Third input: email
    const handleClickThree = () => {
        if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(textInputThree))){
            setValidThree("label-valid");
            setValidBottomThree("bottom-border-valid");
            return true;
        }
        else{
            setValidThree("label-invalid");
            setValidBottomThree("bottom-border-invalid");
            return false;
        }
    } 
    const handleChangeThree = (event) => {
        setTextInputThree(event.target.value);
    }
    //  Fourth input: Phone number
    const handleClickFour = () => {
        // Different options for phoneNumberInputs
        const optionOne = /^\d{10}$/;
        const optionTwo = /^[(]+[\d{2}]+[)]+[ ]+[\d{2}]+[-]+[\d{3}]*$/;
        const optionThree = /^[(]+[\d{2}]+[)]+[\d{2}]+[-]+[\d{3}]*$/;
        const optionFour = /^[(]+[\d{2}]+[)]+[ ]+[\d{2}]+[ ]+[-]+[ ]+[\d{3}]*$/;

        if ((optionOne.test(textInputFour)) || (optionTwo.test(textInputFour)) || (optionThree.test(textInputFour)) || (optionFour.test(textInputFour))){
            setValidFour("label-valid");
            setValidBottomFour("bottom-border-valid");
            return true;
        }
        else{
            setValidFour("label-invalid");
            setValidBottomFour("bottom-border-invalid");
            return false;
        }
    }
    const handleChangeFour = (event) => {
        setTextInputFour(event.target.value);
    }

    return (
        <div className="main-heading-form-container">
            {/* Top row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <div className="input-container">
                            <span className = {valid}>First Name</span>
                            <input 
                                className="input-area" 
                                type="text" 
                                name="email" 
                                onChange={handleChange}
                                placeholder= 'e.g. John' 
                                required/>
                            <div className = {validBottom}></div>
                        </div>
                        <div>
                            {/* <button onClick = {handleClick}></button> */}
                        </div>
                    </div>
                    <div className="column-item">
                        <div className="input-container">
                            <span className = {validTwo}>Last Name</span>
                            <input 
                                className="input-area" 
                                type="text" 
                                name="email" 
                                onChange={handleChangeTwo}
                                placeholder= 'e.g. Doe' 
                                required/>
                            <div className = {validBottomTwo}></div>
                        </div>
                        <div>
                            {/* <button onClick = {handleClickTwo}></button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Middle row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <div className="input-container">
                            <span className = {validThree}>Email</span>
                            <input 
                                className="input-area" 
                                type="text" 
                                name="email" 
                                onChange={handleChangeThree}
                                placeholder="Enter your email address" 
                                required/>
                            <div className = {validBottomThree}></div>
                        </div>
                        <div>
                            {/* <button onClick = {handleClickThree}></button> */}
                        </div>
                    </div>
                    <div className="column-item">
                        <div className="input-container">
                            <span className = {validFour}>Phone Number</span>
                            <input 
                                className="input-area" 
                                type="text" 
                                name="email" 
                                onChange={handleChangeFour}
                                placeholder='(313) 249 - 2904'
                                required/>
                            <div className = {validBottomFour}></div>
                        </div>
                        <div>
                            {/* <button onClick = {handleClickFour}>FAKE</button> */}
                        </div>
                    </div>
                </div>
            </div>  
            {/* Add link row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <button>Add Link</button>    
                    </div>
                    <div className="column-item">
                        {/* BLANK */}
                    </div>
                </div>
            </div>  
            <button onClick = {allCheck}>check all</button>
        </div>
    )
}

export default Form;