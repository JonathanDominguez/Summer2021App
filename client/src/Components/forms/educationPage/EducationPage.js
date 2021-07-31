import React, { useState } from 'react'
import './EducationPage.css'


const EducationPage = (props) => {
      // Props being brought in
    const { data, handleChange, next, back } = props;
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
    // data
    // (/^[\d{1}]+[-]+[\d{1}]+[-]+[\d{3}]*$/.test(textInput)


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
            {/* Top row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <input 
                            type="text"
                            name="university"
                            placeholder="e.g. John"
                            className="input-area" 
                            value={data.university}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="column-item">
                        <div className="education-date-container">
                            <div className="education-date-item">
                                <input 
                                    type="date"
                                    name="startDate"
                                    placeholder="e.g. John"
                                    className="input-area" 
                                    value={data.startDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="education-date-item">
                                <input 
                                    type="date"
                                    name="endDate"
                                    placeholder="e.g. John"
                                    className="input-area" 
                                    value={data.endDate}
                                    onChange={handleChange}
                                />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            {/* Middle row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <input 
                            type="text"
                            name="degree"
                            placeholder="e.g. John"
                            className="input-area" 
                            value={data.degree}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="column-item">
                        <input 
                            type="text"
                            name="gpa"
                            placeholder="e.g. John"
                            className="input-area" 
                            value={data.gpa}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>  
            {/* Add link row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <input 
                            type="text"
                            name="relevantCourseOne"
                            placeholder="e.g. John"
                            className="input-area" 
                            value={data.relevantCourseOne}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="column-item">
                        <input 
                            type="text"
                            name="relevantCourseTwo"
                            placeholder="e.g. John"
                            className="input-area" 
                            value={data.relevantCourseTwo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>  
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <button>Add course work</button>
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

