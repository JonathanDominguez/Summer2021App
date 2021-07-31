import React, { useState } from 'react';
import './HeadingPage.css'
// import useForm from './useFormHeading'
// import validation from './validationHeading'

const Form = (props) => {
    // Props being brought in
    const { data, handleChange, next } = props;
    // Controls button being disabled 
    const [continueMe, setContinue] = useState(false)
    // First Input
    const [styleState, setStyleState] = useState("label-default");
    const [styleStateBottom, setStyleStateBottom] = useState("bottom-border-default");
    // Second Input
    const [styleStateTwo, setStyleStateTwo] = useState("label-default");
    const [styleStateBottomTwo, setStyleStateBottomTwo] = useState("bottom-border-default");
    // Third Input
    const [styleStateThree, setStyleStateThree] = useState("label-default");
    const [styleStateBottomThree, setStyleStateBottomThree] = useState("bottom-border-default");
    // Fourth Input
    const [styleStateFour, setStyleStateFour] = useState("label-default");
    const [styleStateBottomFour, setStyleStateBottomFour] = useState("bottom-border-default");
    // Validation
    // Return true: if is it invalid
    // Return false: if it is valid 
    const firstNameValidation = () => {
        if (data.firstName === '') {
            console.log('reached firstname')
            setStyleState("label-invalid")
            setStyleStateBottom("bottom-border-invalid")
            return true 
        }
        setStyleState("label-valid")
        setStyleStateBottom("bottom-border-valid")
        return false
    }
    const lastNameValidation = () => {
        if (data.lastName === '') {
            console.log('reached lastname')
            setStyleStateTwo("label-invalid")
            setStyleStateBottomTwo("bottom-border-invalid")
            return true 
        }
        setStyleStateTwo("label-valid")
        setStyleStateBottomTwo("bottom-border-valid")
        return false
    }
    const usersEmailValidation = () => {
        if (data.usersEmail === '') {
            setStyleStateThree("label-invalid")
            setStyleStateBottomThree("bottom-border-invalid")
            return true 
        }
        setStyleStateThree("label-valid")
        setStyleStateBottomThree("bottom-border-valid")
        return false
    }
    const phoneNumberValidation = () => {
        if (data.phoneNumber === '') {
            setStyleStateFour("label-invalid")
            setStyleStateBottomFour("bottom-border-invalid")
            return true 
        }
        setStyleStateFour("label-valid")
        setStyleStateBottomFour("bottom-border-valid")
        return false
    }

    // const [formStatus, setFormStatus] = useState()
    function checkAll (){
        let setFormStatus; 
        const validationFuncs = [firstNameValidation(), lastNameValidation(), usersEmailValidation(), phoneNumberValidation()]
        for (let i = 0; i < validationFuncs.length; i++) {
            console.log(validationFuncs[i])
            // Return true = invalid 
            if(validationFuncs[i] === true){
                // Form is not complete or invalid input(s)
                setFormStatus = false
            }
        }
        return setFormStatus
    }

    function check (event){
        if(checkAll()===false){
            setContinue(false)
            event.preventDefault();
        }
        else{
            setContinue(true)
            next()
        }
    }

    return (
        <div className="main-heading-form-container">
            <form >
                {/* Top row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleState}>First Name</span>
                                <input 
                                    type="text"
                                    name="firstName"
                                    placeholder="e.g. John"
                                    className="input-area" 
                                    value={data.firstName}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottom}></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateTwo}>Last Name</span>
                                <input 
                                    type="text"
                                    name="lastName"
                                    placeholder="e.g. Doe"
                                    className="input-area" 
                                    value={data.lastName}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomTwo}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Middle row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateThree}>Email</span>
                                <input 
                                    type="email"
                                    name="usersEmail"
                                    placeholder="MyEmail@gmail.com"
                                    className="input-area" 
                                    value={data.usersEmail}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomThree}></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateFour}>Phone Number</span>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="e.g. (123)456-7890"
                                    className="input-area" 
                                    value={data.phoneNumber}
                                    onChange={handleChange} 
                                />
                                <div className = {styleStateBottomFour}></div>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* Add link row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            {/* <button>Add Link</button>*/}
                        </div>
                        <div className="column-item">
                            {/* BLANK */}
                        </div>
                    </div>
                </div>  
                    <button  style={{marginLeft: "100px"}} onClick={check} disabled={continueMe}>Next</button>
            </form>
        </div>
    )
};

export default Form;