import React, { useState } from 'react';
import './HeadingPage.css'
import useForm from './useFormHeading'
import validation from './validationHeading'

const Form = ({submitForm}) => {
    // Use form
    const {handleChange, values, handleSubmit, errors} = useForm(
        submitForm,
        validation
    );
    console.log(submitForm)
    // States
        // First Inputs
        const [valid, setValid] = useState("label-default");
        const [validBottom, setValidBottom] = useState("bottom-border-default");
        // if(errors.firstName){
        //     setValid("label-valid");
        //     setValidBottom("bottom-border-valid");
        // }
        // else{
        //     setValid("label-invalid");
        //     setValidBottom("bottom-border-invalid");
        // }

        // Second Inputs
        const [validTwo, setValidTwo] = useState("label-default");
        const [validBottomTwo, setValidBottomTwo] = useState("bottom-border-default");
        // Third Inputs
        const [validThree, setValidThree] = useState("label-default");
        const [validBottomThree, setValidBottomThree] = useState("bottom-border-default");
        // Fourth Input
        const [validFour, setValidFour] = useState("label-default");
        const [validBottomFour, setValidBottomFour] = useState("bottom-border-default");

    return (
        <div className="main-heading-form-container">
            <form onSubmit={handleSubmit} noValidate>
                {/* Top row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            <div className="input-container">
                                {/* <span className = {valid}>First Name</span> */}
                                <span className = {valid}>First Name</span>
                                <input 
                                    className="input-area" 
                                    type="text" 
                                    name="firstName" 
                                    placeholder= 'e.g. John' 
                                    value={values.firstName}
                                    onChange={handleChange}
                                    required/>
                                <div className = {validBottom}></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {validTwo}>Last Name</span>
                                <input 
                                    className="input-area" 
                                    type="text" 
                                    name="lastName" 
                                    placeholder= 'e.g. Doe' 
                                    value={values.lastName}
                                    onChange={handleChange}
                                    required/>
                                <div className = {validBottomTwo}></div>
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
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter your email address" 
                                    value={values.email}
                                    onChange={handleChange}
                                    required/>
                                <div className = {validBottomThree}></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {validFour}>Phone Number</span>
                                <input 
                                    className="input-area" 
                                    type="tel" 
                                    name="phoneNumber" 
                                    placeholder='(313) 249 - 2904'
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    required/>
                                <div className = {validBottomFour}></div>
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
                <button className='form-input-btn' type='submit' style={{marginLeft: "100px"}}>
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Form;