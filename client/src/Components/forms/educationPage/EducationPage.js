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
    // Firth Input: GPA
    const [styleStateFive, setStyleStateFive] = useState("label-default");
    const [styleStateBottomFive, setStyleStateBottomFive] = useState("bottom-border-default");
    // Six Input: course work
    const [styleStateSix, setStyleStateSix] = useState("label-default");
    const [styleStateBottomSix, setStyleStateBottomSix] = useState("bottom-border-default");
    // Seven Input: course work
    const [styleStateSeven, setStyleStateSeven] = useState("label-default");
    const [styleStateBottomSeven, setStyleStateBottomSeven] = useState("bottom-border-default");
    // Functions for validation as well as setting the css validation
    const university = () => {
        if (data.university === '') {
            setStyleState("label-invalid")
            setStyleStateBottom("bottom-border-invalid")
            return true 
        }
        setStyleState("label-valid")
        setStyleStateBottom("bottom-border-valid")
        return false
    }
    const startDate = () => {
        if (data.startDate === '') {
            setStyleStateTwo("label-invalid")
            setStyleStateBottomTwo("bottom-border-invalid")
            return true 
        }
        setStyleStateTwo("label-valid")
        setStyleStateBottomTwo("bottom-border-valid")
        return false
    }
    // date
    // (/^[\d{1}]+[-]+[\d{1}]+[-]+[\d{3}]*$/.test(textInput)
    const endDate = () => {
        if (data.endDate === '') {
            setStyleStateThree("label-invalid")
            setStyleStateBottomThree("bottom-border-invalid")
            return true 
        }
        setStyleStateThree("label-valid")
        setStyleStateBottomThree("bottom-border-valid")
        return false
    }
    const degree = () => {
        if (data.degree === '') {
            setStyleStateFour("label-invalid")
            setStyleStateBottomFour("bottom-border-invalid")
            return true 
        }
        setStyleStateFour("label-valid")
        setStyleStateBottomFour("bottom-border-valid")
        return false
    }
    const gpa = () => {
        if (!(/^[0-4]\.\d\d$/).test(data.gpa)) {
            setStyleStateFive("label-invalid")
            setStyleStateBottomFive("bottom-border-invalid")
            return true 
        }
        setStyleStateFive("label-valid")
        setStyleStateBottomFive("bottom-border-valid")
        return false
    }
    const courseOne = () => {
        if (data.relevantCourseOne === '') {
            setStyleStateSix("label-invalid")
            setStyleStateBottomSix("bottom-border-invalid")
            return true 
        }
        setStyleStateSix("label-valid")
        setStyleStateBottomSix("bottom-border-valid")
        return false
    }
    const courseTwo = () => {
        if (data.relevantCourseTwo === '') {
            setStyleStateSeven("label-invalid")
            setStyleStateBottomSeven("bottom-border-invalid")
            return true 
        }
        setStyleStateSeven("label-valid")
        setStyleStateBottomSeven("bottom-border-valid")
        return false
    }

    function checkAll (){
        let setFormStatus; 
        const validationFuncs = [university(), startDate(), endDate(), degree(),gpa(),courseOne(),courseTwo()]
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
        <div className="main-heading-form">
            {/* Top row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <span className = {styleState}>University Name</span>
                        <input 
                            type="text"
                            name="university"
                            placeholder="e.g. John"
                            className="input-area" 
                            value={data.university}
                            onChange={handleChange}
                        />
                        <div className = {styleStateBottom}></div>
                    </div>
                    <div className="column-item">
                        <div className="education-date-container">
                            <div className="education-date-item">
                                <span className = {styleStateTwo}>Start Date</span>
                                <input 
                                    type="date"
                                    name="startDate"
                                    placeholder="e.g. John"
                                    className="input-area" 
                                    value={data.startDate}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomTwo}></div>
                            </div>
                            <div className="education-date-item">
                                <span className = {styleStateThree}>End Date</span>
                                <input 
                                    type="date"
                                    name="endDate"
                                    placeholder="e.g. John"
                                    className="input-area" 
                                    value={data.endDate}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomThree}></div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            {/* Middle row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <span className = {styleStateFour}>Degree</span>
                        <input 
                            type="text"
                            name="degree"
                            placeholder="e.g. B.S. Psychology"
                            className="input-area" 
                            value={data.degree}
                            onChange={handleChange}
                        />
                        <div className = {styleStateBottomFour}></div>
                    </div>
                    <div className="column-item">
                        <span className = {styleStateFive}>GPA</span>
                        <input 
                            type="text"
                            name="gpa"
                            placeholder="e.g. 3.42"
                            className="input-area" 
                            value={data.gpa}
                            onChange={handleChange}
                        />
                        <div className = {styleStateBottomFive}></div>
                    </div>
                </div>
            </div>  
            {/* Add link row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <span className = {styleStateSix}>Relevant Coursework</span>
                        <input 
                            type="text"
                            name="relevantCourseOne"
                            placeholder="e.g. "
                            className="input-area" 
                            value={data.relevantCourseOne}
                            onChange={handleChange}
                        />
                        <div className = {styleStateBottomSix}></div>
                    </div>
                    <div className="column-item">
                        <span className = {styleStateSeven}>Relevant Coursework</span>
                        <input 
                            type="text"
                            name="relevantCourseTwo"
                            placeholder="e.g. Psych 10"
                            className="input-area" 
                            value={data.relevantCourseTwo}
                            onChange={handleChange}
                        />
                        <div className = {styleStateBottomSeven}></div>
                    </div>
                </div>
            </div>  
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        {/* <button>Add course work</button> */}
                    </div>
                    <div className="column-item">
                        {/* Blank */}
                        <button onClick={back}>Back</button> 
                        <button  style={{marginLeft: "100px"}} onClick={check} disabled={continueMe}>Next</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default EducationPage;