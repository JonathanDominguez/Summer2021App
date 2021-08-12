import React from 'react'
import './DownloadVersion.css'
import resumeImage from '../../../images/sample.png'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs'
// import resume from '../../../Templates/Resumes/Resume_Template_One.pdf'

const DownloadVersion = (props) => {
    const { data, back } = props;

    async function downloadPdf() {
        const pdfDoc = await PDFDocument.create()
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
        const page = pdfDoc.addPage()
        const { height } = page.getSize()
        const fontSize = 30
        page.drawText(data.firstName, {
            x: 50,
            y: height - 4 * fontSize,
            size: fontSize,
            font: timesRomanFont,
            color: rgb(0, 0.53, 0.71),
        })
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, "Resume.pdf", "application/pdf");
    }

    function downlodDoc (){
        console.log('IN progress')
    }
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
                                    <button className = "button-type" onClick={downloadPdf}>PDF</button>
                                </div> 
                            </div>
                        </div>
                        <div className="download-item">
                            <div className="image-container">
                                <div className="image-item">
                                    <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                </div>
                                <div className="image-item">
                                    <button className = "button-type" onClick={downlodDoc}>Microsoft Word</button>
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