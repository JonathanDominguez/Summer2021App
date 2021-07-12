import React from 'react'
// CSS
import './EducationPage.css'
// Input Components
import Input from '../../Inputs/Inputs/Input'
import DateInput from '../../Inputs/dateInput/DateInput'

export default function EducationPage() {
    return (
        <div className="main-heading-form-container">
            {/* Top row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <Input 
                            inputTitle = "Education"
                            placeholderText = "Enter your schools name"/>
                    </div>
                    <div className="column-item">
                        <div className="education-date-container">
                            <div className="education-date-item">
                                <DateInput 
                                inputTitle = "Start" />
                            </div>
                            <div className="education-date-item">
                                <DateInput 
                                    inputTitle = "Expected Graduation"/>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            {/* Middle row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                    <div className="column-item">
                        <Input 
                            inputTitle = "Degree"
                            placeholderText = "Enter your degree"/>
                    </div>
                    <div className="column-item">
                        <Input 
                            inputTitle = "GPA"
                            placeholderText = "Enter your GPA"/>
                    </div>
                </div>
            </div>  
            {/* Add link row */}
            <div className="main-heading-form-item">
                <div className="column-container">
                <div className="column-item">
                        <Input 
                            inputTitle = "Course Work"
                            placeholderText = "Enter your Course Work"/>
                    </div>
                    <div className="column-item">
                        <Input 
                            inputTitle = "Course Work"
                            placeholderText = "Enter your Course Work"/>
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
                    </div>
                </div>
            </div>  
        </div>
    )
}


