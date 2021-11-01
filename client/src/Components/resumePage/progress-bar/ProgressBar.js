import React, { useState } from 'react';
import './ProgressBar.css';
import Form from '../forms/headingPage/HeadingPage';
import EducationForm from '../forms/educationPage/EducationPage'
import ExperienceOne from '../forms/experienceOne/ExperienceOne'
import ExperienceTwo from '../forms/experienceTwo/ExperienceTwo'
import ExperienceThree from '../forms/experienceThree/ExperienceThree'
import AdditionalForm from '../forms/additionalForm/AdditionalForm'
import DownLoads from '../download-version/DownloadVersion'

const ProgressBar = () => { 
    const [currentStep, setCurrentStep] = useState(0);
    // const [validInput, setValidInput] = useState("label-default");
    const [formData, setFormData] = useState({
        // Heading Form
        firstName: '',
        lastName: '',
        usersEmail: '',
        phoneNumber: '',
        address: '',
        linkOne: '',
        linkTwo: '',
        // Education Form 
        university: '',
        startDate: '',
        endDate:'',
        degree:'',
        gpa:'',
        relevantCourseOne:'',
        relevantCourseTwo:'',
        // First Experience
        companyOne: '',
        locationOne: '',
        titleOne: '',
        startOne: '',
        endOne: '',
        experienceOneOne:'',
        experienceOneTwo:'',
        experienceOneThree:'',
        experienceOneFour:'',
        // Second Experience
        companyTwo: '',
        locationTwo: '',
        titleTwo: '',
        startTwo: '',
        endTwo: '',
        experienceTwoOne:'',
        experienceTwoTwo:'',
        experienceTwoThree:'',
        experienceTwoFour:'',
        // Third Experience
        companyThree: '',
        locationThree: '',
        titleThree: '',
        startThree: '',
        endThree: '',
        experienceThreeOne:'',
        experienceThreeTwo:'',
        experienceThreeThree:'',
        experienceThreeFour:'',
        // Additional Skills
        certificates: '',
        languages: '',
        software: '',
        volunteerWork: '',
        interests: '',
        other: ''
    });

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };

    const next = () => {
        setCurrentStep(currentStep + 1);
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
            case 2:
                return (
                    <ExperienceOne
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            case 3:
                // return (
                //     <DownLoads
                //         data={formData}
                //         back={back}
                //     />
                // );
                return (
                    <ExperienceTwo
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            case 4:
                return (
                    <ExperienceThree
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            case 5:
                return (
                    <AdditionalForm
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            case 6:
                return (
                    <DownLoads
                        data={formData}
                        back={back}
                    />
                );
            default:
                return (
                    <p>Error</p>
                );    
        }
    }

    return (
        <div className="main-progress-container">
            {/* ItemOne: Progress Bar  */}
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
                        <p className = {currentStep >=5 ? "title-blue" : "title-grey"}>Additional</p>
                    </div>
                </div>
            </div>
            {/* ItemTwo: Button && Forms */}
            <div className="progress-item">
                <div className="form-button-container">
                    {/* Forms sections */}
                    <div className="form-button-item">
                        {switchForms()}
                    </div>
                    <div className="form-button-item">
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;