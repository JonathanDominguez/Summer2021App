import React from 'react';
import './DownloadVersion.css';
import resumeImage from '../../../images/sample.png';
import PDFDownload from './pdfDownload/pdfDownload'
import WordDownload from './docxDownload/docx'

const DownloadVersion = (props) => {
    const { data, back } = props;
    // Converts phoneNum to (###) ###- ####
    // const numberConverter = (phoneNum) => {
    //     return '(' + phoneNum.substring(0, 3) + ') ' + phoneNum.substring(3, 6) + ' - ' + phoneNum.substring(6, 10);
    // }
    return (
        <div>
            <div className="main-container">
                <div className="main-item">
                    <div className = "text-box">
                        <p className = "heading-text">How would you like to export your work?</p>
                    </div>
                </div>
                <div className="main-item">
                    <div className="download-container">
                        <div className="download-item">
                            <div className="image-container">
                                <div className="image-item">
                                    <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                </div>
                                <div className="image-item">
                                    <button className = "button-type"> 
                                        <PDFDownload
                                            data={data}
                                        />
                                    </button>
                                </div> 
                            </div>
                        </div>
                        <div className="download-item">
                            <div className="image-container">
                                <div className="image-item">
                                    <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                </div>
                                <div className="image-item">
                                    {/* <WordDownload className = "button-type" onClick={downloadDoc}>Microsoft Word</WordDownload> */}
                                    <button className = "button-type"> 
                                        <WordDownload
                                            data={data}
                                        />
                                    </button>
                                </div> 
                            </div>                                       
                        </div> 
                    </div>
                </div>
                <div className="main-item-button">
                    <button className = "button-left" onClick={back}>Back</button> 
                </div>
            </div>
        </div>
    )
}
export default DownloadVersion