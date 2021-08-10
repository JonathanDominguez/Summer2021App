import React, { useState } from 'react';
import './ExperienceThree.css'

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
        if (data.companyThree === '') {
            setStyleState("label-invalid")
            setStyleStateBottom("bottom-border-invalid")
            return true 
        }
        setStyleState("label-valid")
        setStyleStateBottom("bottom-border-valid")
        return false
    }
    const lastNameValidation = () => {
        if (data.locationThree === '') {
            setStyleStateTwo("label-invalid")
            setStyleStateBottomTwo("bottom-border-invalid")
            return true 
        }
        setStyleStateTwo("label-valid")
        setStyleStateBottomTwo("bottom-border-valid")
        return false
    }
    const titleOneValidation = () => {
        if (data.titleThree === '') {
            setStyleStateThree("label-invalid")
            setStyleStateBottomThree("bottom-border-invalid")
            return true 
        }
        setStyleStateThree("label-valid")
        setStyleStateBottomThree("bottom-border-valid")
        return false
    }
    const startOneValidation = () => {
        if (data.startThree === '') {
            setStyleStateFour("label-invalid")
            setStyleStateBottomFour("bottom-border-invalid")
            return true 
        }
        setStyleStateFour("label-valid")
        setStyleStateBottomFour("bottom-border-valid")
        return false
    }
    const endOneValidation = () => {
        if (data.endThree === '') {
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
                                <span className = {styleState}>Most Recent Company/ Organization</span>
                                <input 
                                    type="text"
                                    name="companyThree"
                                    placeholder="e.g. Apple"
                                    className="input-area" 
                                    value={data.companyThree}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottom}></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateTwo}>Company/ Organization Location</span>
                                <input 
                                    type="text"
                                    name="locationThree"
                                    placeholder="e.g. Los Angeles, CA"
                                    className="input-area" 
                                    value={data.locationThree}
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
                                <span className = {styleStateThree}>Title</span>
                                <input 
                                    type="email"
                                    name="titleThree"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.titleThree}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomThree}></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <div class="date-container">
                                    <div class="date-item">
                                        <span className = {styleStateFour}>Start Date</span>
                                            <input 
                                                type="month"
                                                name="startThree"
                                                placeholder="e.g. John"
                                                className="input-area" 
                                                value={data.startThree}
                                                onChange={handleChange}
                                            />
                                        <div className = {styleStateBottomFour}></div>
                                    </div>
                                    <div class="date-item">
                                        <span className = {styleStateFive}>End Date</span>
                                            <input 
                                                type="text"
                                                name="endThree"
                                                placeholder="e.g. John"
                                                className="input-area" 
                                                value={data.endThree}
                                                onChange={handleChange}
                                            />
                                        <div className = {styleStateBottomFive}></div>
                                    </div> 
                                </div>
                                {/* <span className = {styleStateFour}>Phone Number</span>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="e.g. (123)456-7890"
                                    className="input-area" 
                                    value={data.phoneNumber}
                                    onChange={handleChange} 
                                />
                                <div className = {styleStateBottomFour}></div> */}
                            </div>
                        </div>
                    </div>
                </div>  
                {/* Add link row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            <div className="input-container">
                                <span className = 'label-default'>Experience One</span>
                                <input 
                                    type="text"
                                    name="experienceThreeOne"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.experienceThreeOne}
                                    onChange={handleChange}
                                />
                                <div className = 'bottom-border-default'></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = 'label-default'>Experience Two</span>
                                <input 
                                    type="text"
                                    name="experienceThreeTwo"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.experienceThreeTwo}
                                    onChange={handleChange}
                                />
                                <div className = 'bottom-border-default'></div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            <div className="input-container">
                                <span className = 'label-default'>Experience Three</span>
                                <input 
                                    type="text"
                                    name="experienceThreeThree"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.experienceThreeThree}
                                    onChange={handleChange}
                                />
                                <div className = 'bottom-border-default'></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = 'label-default'>Experience Four</span>
                                <input 
                                    type="text"
                                    name="experienceThreeFour"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.experienceThreeFour}
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