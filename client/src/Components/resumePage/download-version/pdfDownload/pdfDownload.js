import React from 'react'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs'

// export default function pdfDownload(props) {
const pdfDownload = (props) => {
    const { data } = props;

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


    return (
        <div>
            <button className="print-button" onClick={downloadPdf}>PDF</button>
        </div>
    )
}

export default pdfDownload;