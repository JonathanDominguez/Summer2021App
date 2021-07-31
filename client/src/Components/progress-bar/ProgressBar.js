import React, { useState } from 'react';
import './ProgressBar.css';
import Form from '../form/formPages/headingPage/HeadingPage';
import EducationForm from '../form/formPages/educationPage/EducationPage'

const ProgressBar = () => { 
    const [currentStep, setCurrentStep] = useState(0);
    // const [validInput, setValidInput] = useState("label-default");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        usersEmail: '',
        phoneNumber: '',
        schoolName: '',
        gpa: ''
    });

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };

    const next = () => {
        setCurrentStep(currentStep + 1);
        console.log(formData.firstName)
    };
        const back = () => {
        setCurrentStep(currentStep - 1);
    };

    const switchForms = () => {
        switch (currentStep) {
            case 0:
                return (
                    <Form 
                    data={formData} 
                    handleChange={handleChange} 
                    next={next} 
                    // inputStatus={validInput}
                    />
                );
            case 1:
                return (
                    <EducationForm
                    data={formData}
                    handleChange={handleChange}
                    next={next}
                    back={back}
                    />
                );
            // case 3:
            // return (
            //     <Step3
            //     data={formData}
            //     handleChange={handleChange}
            //     next={next}
            //     back={back}
            //     />
            // );
            default:
                // return <Submit data={formData} back={back} />;
        }
    }

    return (
        <div className="main-progress-container">
            {/* Progress Bar  */}
            <div className="progress-item">
                <div className = "progress-container-div">
                    <div className = {currentStep ===0 ? "section-large" : "section-small"}>
                        <div className = "section-number-blue"><p className = "num-section">1</p></div>
                        <p className = {currentStep >=0 ? "title-blue" : "title-grey"}>Heading</p>
                        <div className = {currentStep === 0 ? "line-large" : "line-small"}></div>
                    </div>
                    <div className = {currentStep === 1 ? "section-large" : "section-small"}>
                        <div className = {currentStep >=1 ? "section-number-blue" : "section-number-grey"}><p className = "num-section">2</p></div>
                        <p className = {currentStep >=1 ? "title-blue" : "title-grey"}>Education</p>
                        <div className = {currentStep === 1 ? "line-large" : "line-small"}></div>
                    </div>
                    <div className = {currentStep === 2 || currentStep === 3 || currentStep === 4 ? "section-large" : "section-small"}>
                        <div className = {currentStep >=2 ? "section-number-blue" : "section-number-grey"}><p className = "num-section">3</p></div>
                        <p className = {currentStep >=2 ? "title-blue" : "title-grey"}>Experience</p>
                        {/* line */}
                        <div className = {currentStep === 2 || currentStep === 3 || currentStep === 4? "line-large" : "line-small"}>
                            <div className = {4 >= currentStep && currentStep >= 2? "show-levels" : "display-none"}>
                                <p className = {currentStep >= 2 ? "show-blue" : "show-grey"}>Experience 1</p>
                                <p className = {currentStep >= 3 ? "show-blue" : "show-grey"}>Experience 2</p>
                                <p className = {currentStep >= 4 ? "show-blue" : "show-grey"}>Experience 3</p>  
                            </div>
                        </div>                    
                    </div>
                    <div className = {currentStep === 5 ? "section-large" : "section-small"}>
                        <div className = {currentStep >=5 ? "section-number-blue" : "section-number-grey"}><p className = "num-section">4</p></div>
                        <p className = {currentStep >=5 ? "title-blue" : "title-grey"}>Skills</p>
                    </div>
                </div>
            </div>
            {/* Button && Forms */}
            <div className="progress-item">
                <div className="form-button-container">
                    {/* Forms sections */}
                    <div className="form-button-item">
                        {switchForms()}
                    </div>
                    {/* Forms */}
                    <div className="form-button-item">
                        {/* <div className="button-grid-container">
                            <div className="button-grid-item">
                                <button className = "button-type" 
                                    // onClick={minusOne} 
                                    // disabled={backValue}
                                >Back</button>
                            </div>
                            <div className="button-grid-item">
                                <button 
                                    className = "button-type" 
                                    // onClick={addOne} 
                                    // disabled={nextValue}
                                >Continue</button>
                            </div> 
                        </div> */}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;