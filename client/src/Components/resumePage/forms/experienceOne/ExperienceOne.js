import React, { useState } from 'react';
import './ExperienceOne.css'

const Form = (props) => {
    // Props being brought in
    const { data, handleChange, next, back } = props;
    // Controls button being disabled 
    const [continueMe, setContinue] = useState(false)
    // First Input: Company Name
    const [styleState, setStyleState] = useState("label-default");
    const [styleStateBottom, setStyleStateBottom] = useState("bottom-border-default");
    // Second Input: Company Location
    const [styleStateTwo, setStyleStateTwo] = useState("label-default");
    const [styleStateBottomTwo, setStyleStateBottomTwo] = useState("bottom-border-default");
    // Third Input: Position
    const [styleStateThree, setStyleStateThree] = useState("label-default");
    const [styleStateBottomThree, setStyleStateBottomThree] = useState("bottom-border-default");
    // Fourth Input: Start date
    const [styleStateFour, setStyleStateFour] = useState("label-default");
    const [styleStateBottomFour, setStyleStateBottomFour] = useState("bottom-border-default");
    // Fourth Input: End date
    const [styleStateFive, setStyleStateFive] = useState("label-default");
    const [styleStateBottomFive, setStyleStateBottomFive] = useState("bottom-border-default");
    // Validation
    // Return true: if is it invalid
    // Return false: if it is valid 
    const comName = () => {
        if (data.companyOne === '') {
            setStyleState("label-invalid")
            setStyleStateBottom("bottom-border-invalid")
            return true 
        }
        setStyleState("label-valid")
        setStyleStateBottom("bottom-border-valid")
        return false
    }
    const comLocation = () => {
        if (data.locationOne === '') {
            setStyleStateTwo("label-invalid")
            setStyleStateBottomTwo("bottom-border-invalid")
            return true 
        }
        setStyleStateTwo("label-valid")
        setStyleStateBottomTwo("bottom-border-valid")
        return false
    }
    const positionName = () => {
        if (data.titleOne === '') {
            setStyleStateThree("label-invalid")
            setStyleStateBottomThree("bottom-border-invalid")
            return true 
        }
        setStyleStateThree("label-valid")
        setStyleStateBottomThree("bottom-border-valid")
        return false
    }
    const startDate = () => {
        if (data.startOne === '') {
            setStyleStateFour("label-invalid")
            setStyleStateBottomFour("bottom-border-invalid")
            return true 
        }
        setStyleStateFour("label-valid")
        setStyleStateBottomFour("bottom-border-valid")
        return false
    }
    // Checks the first month from the input of "may 2020"
    const monthChecker = (userInput) => {
        let correctMonth = userInput.substr(0,userInput.indexOf(' '));
        let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        for (let i = 0; i < months.length; i++) {
            if(months[i] === correctMonth){
                return true
            }
        }
        return false
    }
    // Checks the year from the input of "may 2020"
    const yearChecker = (year)=>{
        let yearHolder = year.substring(year.indexOf(' ')+1, year.length);
        if(/^\d{4}$/.test(yearHolder)){
            return true
        }
        return false
    }
    const endDate = () => {
        if(data.endOne === ''){
            setStyleStateFive("label-invalid-one")
            setStyleStateBottomFive("bottom-border-invalid")
            return true 
        }
        else if(data.endOne === 'present' || data.endOne === 'Present' ){
            data.endOne = 'Present'
            setStyleStateFive("label-valid-one")
            setStyleStateBottomFive("bottom-border-valid")
            return false
        }
        else if(monthChecker(data.endOne.toLowerCase()) && yearChecker(data.endOne)){
            setStyleStateFive("label-valid-one")
            setStyleStateBottomFive("bottom-border-valid")
            return false
        }
        else{
            setStyleStateFive("label-invalid-one")
            setStyleStateBottomFive("bottom-border-invalid")
            return true 
        }
    }
    // const [formStatus, setFormStatus] = useState()
    function checkAll (){
        let setFormStatus; 
        const validationFuncs = [comName(), comLocation(), positionName(), startDate(), endDate()]
        for (let i = 0; i < validationFuncs.length; i++) {
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
        <div className="form-one">
            <form >
                {/* Top row */}
                <div className='main-container-one'>
                    <div className="column-container-one">
                        {/* First Name */}
                        <div className="column-item-one">
                            <div className="input-container-one">
                                <span className = {styleState}>Most Recent Company/ Organization</span>
                                <input 
                                    type="text"
                                    name="companyOne"
                                    placeholder="e.g. Apple"
                                    className="input-area" 
                                    value={data.companyOne}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottom}></div>
                            </div>
                        </div>
                        {/* Last Name */}
                        <div className="column-item-one">
                            <div className="input-container">
                                <div className="input-container-one">
                                    <span className = {styleStateTwo}>Company/ Organization Location</span>
                                    <input 
                                        type="text"
                                        name="locationOne"
                                        placeholder="e.g. Los Angeles, CA"
                                        className="input-area" 
                                        value={data.locationOne}
                                        onChange={handleChange}
                                    />
                                    <div className = {styleStateBottomTwo}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Middle row */}
                <div className="main-container-one">
                    <div className="column-container-one">
                        {/* Email */}
                        <div className="column-item-one">
                            <div className="input-container">
                                <span className = {styleStateThree}>Title</span>
                                <input 
                                    type="email"
                                    name="titleOne"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.titleOne}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomThree}></div>
                            </div>
                        </div>
                        {/* Phone Number */}
                        <div className="column-item-one">
                            <div className="input-container">
                                <div className="date-container-two">
                                    <div className="date-item-two">
                                        <span className = {styleStateFour}>Start Date</span>
                                            <input 
                                                type="month"
                                                name="startOne"
                                                // placeholder="e.g. John"
                                                className="input-area-one-two" 
                                                value={data.startOne}
                                                onChange={handleChange}
                                            />
                                        <div className = {styleStateBottomFour}></div>
                                    </div>
                                    <div className="date-item-two">
                                        <span className = {styleStateFive}>End Date</span>
                                            <input 
                                                type="text"
                                                name="endOne"
                                                placeholder="e.g. May 2021 or Present"
                                                className="input-area-one-two" 
                                                value={data.endOne}
                                                onChange={handleChange}
                                            />
                                        <div className = {styleStateBottomFive}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* Bottom */}
                <div className="main-container-one">
                    <div className="column-container-one">
                        {/* Email */}
                        <div className="column-item-one">
                            <div className="input-container">
                                <span className = 'label-default'>Experience One</span>
                                <input 
                                    type="text"
                                    name="experienceOneOne"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.experienceOneOne}
                                    onChange={handleChange}
                                />
                                <div className = 'bottom-border-default'></div>
                            </div>
                        </div>
                        {/* Phone Number */}
                        <div className="column-item-one">
                            <div className="input-container">
                                <span className = 'label-default'>Experience Two</span>
                                <input 
                                    type="text"
                                    name="experienceOneTwo"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.experienceOneTwo}
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
                                    name="experienceOneThree"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.experienceOneThree}
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
                                    name="experienceOneFour"
                                    placeholder="e.g. Front End Web Developer"
                                    className="input-area" 
                                    value={data.experienceOneFour}
                                    onChange={handleChange}
                                />
                                <div className = 'bottom-border-default'></div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* Button Row */}
                <div className="main-container-one">
                    <div className="button-container">
                        <div className="button-item">
                            <button className = "button-back-one" onClick={back}>Back</button> 
                        </div>
                        <div className="button-item">
                            <div className = "right-button-container">
                                <button  className = "button-next-one" onClick={check} disabled={continueMe}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Form;