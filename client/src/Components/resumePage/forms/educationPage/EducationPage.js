import React, { useState } from 'react'
import './EducationPage.css'

const EducationPage = (props) => {
      // Props being brought in
    const { data, handleChange, next, back } = props;
    // Controls button being disabled 
    const [continueMe, setContinue] = useState(false)
    // First Input: university 
    const [styleState, setStyleState] = useState("label-default");
    const [styleStateBottom, setStyleStateBottom] = useState("bottom-border-default");
    // Second Input: start date
    const [styleStateTwo, setStyleStateTwo] = useState("label-default");
    const [styleStateBottomTwo, setStyleStateBottomTwo] = useState("bottom-border-default");
    // Third Input: end date
    const [styleStateThree, setStyleStateThree] = useState("label-default");
    const [styleStateBottomThree, setStyleStateBottomThree] = useState("bottom-border-default");
    // Fourth Input: degree
    const [styleStateFour, setStyleStateFour] = useState("label-default");
    const [styleStateBottomFour, setStyleStateBottomFour] = useState("bottom-border-default");
    // Functions for validation as well as setting the css validation
    const university = () => {
        if (!(/^[a-zA-Z]*$/.test(data.university)) || data.university === '') {
            setStyleState("label")
            setStyleStateBottom("bottom-border-invalid")
            return true 
        }
        setStyleState("label-valid")
        setStyleStateBottom("bottom-border-valid")
        return false
    }
    const startDate = () => {
        if (data.startDate === '') {
            setStyleStateTwo("label-invalid-one")
            setStyleStateBottomTwo("bottom-border-invalid")
            return true 
        }
        setStyleStateTwo("label-valid-one")
        setStyleStateBottomTwo("bottom-border-valid")
        return false
    }

    const monthChecker = (userInput) => {
        let correctMonth = userInput.substr(0,userInput.indexOf(' '));
        let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        for (let i = 0; i < months.length; i++) {
            if(months[i] === correctMonth){
                console.log("similar " +months[i])
                return true
            }
        }
        return false
    }
    
    const yearChecker = (year)=>{
        let yearHolder = year.substring(year.indexOf(' ')+1, year.length);
        if(/^\d{4}$/.test(yearHolder)){
            console.log('its a year')
            return true
        }
        console.log('not a year')
        return false
    }
    const endDate = () => {
        if(data.endDate === ''){
            setStyleStateThree("label-invalid-one")
            setStyleStateBottomThree("bottom-border-invalid")
            return true 
        }
        else if(data.endDate === 'present' || data.endDate === 'Present' ){
            data.endDate = 'Present'
            setStyleStateThree("label-valid-one")
            setStyleStateBottomThree("bottom-border-valid")
            return false
        }
        else if(monthChecker(data.endDate.toLowerCase()) && yearChecker(data.endDate)){
            setStyleStateThree("label-valid-one")
            setStyleStateBottomThree("bottom-border-valid")
            return false
        }
        else{
            setStyleStateThree("label-invalid-one")
            setStyleStateBottomThree("bottom-border-invalid")
            return true 
        }
    }

    const degree = () => {
        if (!(/^[a-zA-Z]*$/.test(data.degree)) || data.degree === '') {
            setStyleStateFour("label-invalid")
            setStyleStateBottomFour("bottom-border-invalid")
            return true 
        }
        setStyleStateFour("label-valid")
        setStyleStateBottomFour("bottom-border-valid")
        return false
    }

    function checkAll (){
        let setFormStatus; 
        const validationFuncs = [university(), startDate(), endDate(), degree()]
        for (let i = 0; i < validationFuncs.length; i++) {
            // console.log(validationFuncs[i])
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
                                <span className = {styleState}>University Name</span>
                                <input 
                                    type="text"
                                    name="university"
                                    placeholder="e.g. University of California, Santa Cruz"
                                    className="input-area-one" 
                                    value={data.university}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottom}></div>
                            </div>
                        </div>
                        {/* Last Name */}
                        <div className="column-item-one">
                            <div className="input-container">
                                <div className="date-container-one">
                                    <div className="date-item-one">
                                        <span className = {styleStateTwo}>Start Date</span>
                                        <input 
                                            type="month"
                                            name="startDate"
                                            placeholder="e.g. John"
                                            className="input-area-one-two" 
                                            value={data.startDate}
                                            onChange={handleChange}
                                        />
                                        <div className = {styleStateBottomTwo}></div>
                                    </div>
                                    <div className="date-item-one">
                                        <span className = {styleStateThree}>Graduation Date</span>
                                        <input 
                                            type="text"
                                            name="endDate"
                                            placeholder="e.g. March 2021 or Present"
                                            className="input-area-one-two" 
                                            value={data.endDate}
                                            onChange={handleChange}
                                        />
                                        <div className = {styleStateBottomThree}></div>
                                    </div>
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
                                <span className = {styleStateFour}>Degree</span>
                                <input 
                                    type="text"
                                    name="degree"
                                    placeholder="e.g. B.S. Psychology"
                                    className="input-area-one" 
                                    value={data.degree}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomFour}></div>
                            </div>
                        </div>
                        {/* Phone Number */}
                        <div className="column-item-one">
                            <div className="input-container">
                                <span className = 'label-default'>GPA (optional)</span>
                                <input 
                                    type="text"
                                    name="gpa"
                                    placeholder="e.g. 3.42"
                                    className="input-area-one" 
                                    value={data.gpa}
                                    onChange={handleChange}
                                />
                                <div className = 'bottom-border-default'></div>
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
                                <span className = 'label-default'>Relevant Coursework (optional)</span>
                                <input 
                                    type="text"
                                    name="relevantCourseTwo"
                                    placeholder="e.g. Child Psychology"
                                    className="input-area-one" 
                                    value={data.relevantCourseTwo}
                                    onChange={handleChange}
                                />
                                <div className =  'bottom-border-default'></div>
                            </div>
                        </div>
                        {/* Phone Number */}
                        <div className="column-item-one">
                            <div className="input-container">
                                <span className = 'label-default'>Relevant Coursework (optional)</span>
                                <input 
                                    type="text"
                                    name="relevantCourseTwo"
                                    placeholder="e.g. Memory and Consciousness"
                                    className="input-area-one" 
                                    value={data.relevantCourseTwo}
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

export default EducationPage;