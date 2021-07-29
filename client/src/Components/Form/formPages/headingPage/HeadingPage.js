import React, { useState } from 'react';
import './HeadingPage.css'
// import useForm from './useFormHeading'
// import validation from './validationHeading'

const Form = (props) => {
    const { data, handleChange, next } = props;

    return (
        <div className="main-heading-form-container">
            <form >
                {/* Top row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            <div className="input-container">
                                <span>First Name</span>
                                {/* <span className = {valid}>First Name</span> */}
                                <input 
                                    type="text"
                                    name="firstName"
                                    value={data.firstName}
                                    onChange={handleChange}
                                />
                {/* <div className = {validBottom}></div> */}
                <div></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                {/* <span className = {validTwo}>Last Name</span> */}
                                <span>Last Name</span>
                                <input 
                                    type="text"
                                    name="lastName"
                                    value={data.lastName}
                                    onChange={handleChange}
                                />
                                {/* <div className = {validBottomTwo}></div> */}
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Middle row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        <div className="column-item">
                            <div className="input-container">
                                <span>Email</span>
                                {/* <span className = {validThree}>Email</span> */}
                                <input 
                                    type="email"
                                    name="usersEmail"
                                    value={data.usersEmail}
                                    onChange={handleChange}
                                />
                                {/* <div className = {validBottomThree}></div> */}
                                <div></div>
                            </div>
                        </div>
                        <div className="column-item">
                            <div className="input-container">
                                {/* <span className = {validFour}>Phone Number</span> */}
                                <span>Phone Number</span>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={data.phoneNumber}
                                    onChange={handleChange} 
                                />
                                {/* <div className = {validBottomFour}></div> */}
                                <div></div>
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
                {/* <button className='form-input-btn' type='submit' style={{marginLeft: "100px"}}>
                    Sign up
                </button> */}
                    <button  style={{marginLeft: "100px"}} onClick={next}>Next</button>
            </form>
        </div>
    )
};

export default Form;