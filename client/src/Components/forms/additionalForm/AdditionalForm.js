import React, { useState } from 'react';
import './AdditionalForm.css'
import { IoIosAddCircleOutline } from 'react-icons/io';

const Form = (props) => {
    // Props being brought in
    const { data, handleChange, next, back } = props;
    // Controls button being disabled 
    const [continueMe, setContinue] = useState(false)
    // First Input: fist name
    const [styleState, setStyleState] = useState("label-default");
    const [styleStateBottom, setStyleStateBottom] = useState("bottom-border-default");
    // Second Input: last name
    const [styleStateTwo, setStyleStateTwo] = useState("label-default");
    const [styleStateBottomTwo, setStyleStateBottomTwo] = useState("bottom-border-default");
    // Third Input: email
    const [styleStateThree, setStyleStateThree] = useState("label-default");
    const [styleStateBottomThree, setStyleStateBottomThree] = useState("bottom-border-default");
    // Fourth Input: phone number
    const [styleStateFour, setStyleStateFour] = useState("label-default");
    const [styleStateBottomFour, setStyleStateBottomFour] = useState("bottom-border-default");
    // Fourth Input: phone number
    const [styleStateFive, setStyleStateFive] = useState("label-default");
    const [styleStateBottomFive, setStyleStateBottomFive] = useState("bottom-border-default");
    // Validation
    // Return true: if is it invalid
    // Return false: if it is valid 
    const firstNameValidation = () => {
        if (data.companyOne === '') {
            setStyleState("label-invalid")
            setStyleStateBottom("bottom-border-invalid")
            return true 
        }
        setStyleState("label-valid")
        setStyleStateBottom("bottom-border-valid")
        return false
    }
    const lastNameValidation = () => {
        if (data.locationOne === '') {
            setStyleStateTwo("label-invalid")
            setStyleStateBottomTwo("bottom-border-invalid")
            return true 
        }
        setStyleStateTwo("label-valid")
        setStyleStateBottomTwo("bottom-border-valid")
        return false
    }
    const titleOneValidation = () => {
        if (data.titleOne === '') {
            setStyleStateThree("label-invalid")
            setStyleStateBottomThree("bottom-border-invalid")
            return true 
        }
        setStyleStateThree("label-valid")
        setStyleStateBottomThree("bottom-border-valid")
        return false
    }
    const startOneValidation = () => {
        if (data.startOne === '') {
            setStyleStateFour("label-invalid")
            setStyleStateBottomFour("bottom-border-invalid")
            return true 
        }
        setStyleStateFour("label-valid")
        setStyleStateBottomFour("bottom-border-valid")
        return false
    }
    const endOneValidation = () => {
        if (data.endOne === '') {
            setStyleStateFive("label-invalid")
            setStyleStateBottomFive("bottom-border-invalid")
            return true 
        }
        setStyleStateFive("label-valid")
        setStyleStateBottomFive("bottom-border-valid")
        return false
    }
    // const [formStatus, setFormStatus] = useState()
    function checkAll (){
        let setFormStatus; 
        const validationFuncs = [firstNameValidation(), lastNameValidation(), titleOneValidation(), startOneValidation(), endOneValidation()]
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
                                <span className = {styleState}>Certificates</span>
                                <input 
                                    type="text"
                                    name="certificates"
                                    placeholder="e.g. Apple"
                                    className="input-area" 
                                    value={data.certificates}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottom}></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateTwo}>Languages</span>
                                <input 
                                    type="text"
                                    name="languages"
                                    placeholder="e.g. Los Angeles, CA"
                                    className="input-area" 
                                    value={data.languages}
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
                                <span className = {styleState}>Software</span>
                                <input 
                                    type="text"
                                    name="software"
                                    placeholder="e.g. Apple"
                                    className="input-area" 
                                    value={data.software}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottom}></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateTwo}>Volunteer Work</span>
                                <input 
                                    type="text"
                                    name="volunteerWork"
                                    placeholder="e.g. Los Angeles, CA"
                                    className="input-area" 
                                    value={data.volunteerWork}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomTwo}></div>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* Add link row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            <div className="input-container">
                                <span className = 'label-default'>Interests</span>
                                <input 
                                    type="text"
                                    name="interests"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.interests}
                                    onChange={handleChange}
                                />
                                <div className = 'bottom-border-default'></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = 'label-default'>Other</span>
                                <input 
                                    type="text"
                                    name="other"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.other}
                                    onChange={handleChange}
                                />
                                <div className = 'bottom-border-default'></div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="main-heading-form-item">
                    <div className="button-container">
                        <div className="button-item">
                            <button className = "button-left" onClick={back}>Back</button> 
                        </div>
                        <div className="button-item">
                            <div className = "right-button">
                                <button  className = "button-type-next" onClick={check} disabled={continueMe}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Form;