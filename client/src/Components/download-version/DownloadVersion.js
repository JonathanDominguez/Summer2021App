import React from 'react'
import './DownloadVersion.css'
import resumeImage from '../../images/sample.png'
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// require("downloadjs")(data, strFileName, strMimeType);
import download from 'downloadjs'


const DownloadVersion = (props) => {
    const { data } = props;
    // const outPut = () => {
    //     console.log(data)
    // }

    async function modifyPdf() {
        console.log("ss")
      // Fetch an existing PDF document
        const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf';
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

      // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Embed the Helvetica font
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Get the first page of the document
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

      // Get the width and height of the first page
        const { width, height } = firstPage.getSize();

      // Draw a string of text diagonally across the first page
        firstPage.drawText(data.firstName, {
        x: 5,
        y: height / 2 + 300,
        size: 50,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(-45),
    })

      // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save();

		// 	// Trigger the browser to download the PDF document
        download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
    }

    return (
        <div>
            <div className="main-container">
                <div className="main-item">
                    <p className = "heading-text">How would you like to export your work?</p>
                </div>
                <div className="main-item">
                    <div className="download-container">
                        <div className="download-item">
                            <div className="image-container">
                                <div className="image-item">
                                    <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                </div>
                                <div className="image-item">
                                    <button className = "button-type" onClick={modifyPdf}>PDF</button>
                                </div> 
                            </div>
                        </div>
                        <div className="download-item">
                            <div className="image-container">
                                <div className="image-item">
                                    <img src={resumeImage} className = "image-fix" alt ="resume"/>
                                </div>
                                <div className="image-item">
                                    <button className = "button-type">Microsoft Word</button>
                                </div> 
                            </div>                                       
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DownloadVersion