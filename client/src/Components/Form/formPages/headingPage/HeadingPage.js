import React from 'react'
// CSS
import './HeadingPage.css'
// Input Components
import EmailInputTag from '../../Inputs/emailInput/EmailInputTag'
import Input from '../../Inputs/basicInput/Input'
import PhoneNumberInput from '../../Inputs/phoneNumberInput/phoneNumberInput'

const Form = () => {
    return (
        <div className="main-heading-form-container">
            {/* Top row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <Input 
                            inputTitle = "First Name"
                            placeholderText = "Enter your First Name"/>
                    </div>
                    <div className="column-item">
                        <Input 
                            inputTitle = "Last Name"
                            placeholderText = "Enter your Last Name"/>
                    </div>
                </div>
            </div>
            {/* Middle row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <EmailInputTag />
                    </div>
                    <div className="column-item">
                        <PhoneNumberInput 
                        inputTitle = "Phone Number"
                        placeholderText = "Enter your Phone Number"/>
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
        </div>
    )
}

export default Form;