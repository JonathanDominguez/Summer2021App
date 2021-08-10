import React from 'react'
import './DownloadVersion.css'
import resumeImage from '../../../images/sample.png'
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs'

const DownloadVersion = (props) => {
    const { data, back } = props;

    async function downlodPdf() {
        const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf';
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { height } = firstPage.getSize();
        firstPage.drawText(data.firstName, {
        x: 5,
        y: height / 2 + 300,
        size: 50,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
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
                                    <button className = "button-type" onClick={downlodPdf}>PDF</button>
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