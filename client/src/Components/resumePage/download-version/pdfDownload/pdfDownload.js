import React from 'react'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs'

const PfDownload = (props) => {
    // User data being passed in
    const { data } = props;

    async function downloadPdf() {
        // Creation of page and font being used
        const pdfDoc = await PDFDocument.create()
        const timesRomanFontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold)
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
        const page = pdfDoc.addPage()
        const customFont = timesRomanFont;
        // Methods: Getting width/ height of a text
                // const textWidth = customFont.widthOfTextAtSize(data.firstName, 12);
                // const textHeight = customFont.heightAtSize(12)
                // console.log(textWidth)
        const { width, height } = page.getSize()    // H: 841.89 W: 595.28
        const fontSize = 12
        let spaceCounter = height - 4 * 12; // 793.89
        // setCurrentStep(height - 4 * fontSize);
        // Header
            // Users name
        page.drawText(data.firstName + " " +data.lastName, {
            x: (width/2-40) - 15,
            y: spaceCounter,
            size: fontSize,
            font: timesRomanFontBold,
            color: rgb(0, 0, 0),
        })
            // Phone number and email
        let phoneFormat = '(' + data.phoneNumber.substring(0, 3) + ') ' + data.phoneNumber.substring(3, 6) + ' - ' + data.phoneNumber.substring(6, 10)
        page.drawText(phoneFormat + " • " + data.usersEmail, {
            x: (width/2-40 - 90),
            y: spaceCounter - 15,
            size: fontSize,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        spaceCounter -=15;
            // Line
        page.drawLine({
            start: { x:30 , y: spaceCounter - 15 },
            end: { x: width-30, y: spaceCounter - 15 },
            thickness: 1,
            color: rgb(0, 0, 0),
            opacity: 0.75,
        })
        spaceCounter -=15;
        // Experience
        page.drawText("Experience", {
            x: 30,
            y: spaceCounter - 15,
            size: fontSize,
            font: timesRomanFontBold,
            color: rgb(0, 0, 0),
        })        
        spaceCounter -=15;
        // Experience Test
        let tracker = 0;
        // Controls space between experience group and heading line
        // let baseHeight = (spaceCounter - 15); 
        spaceCounter -=15;
        for (let i = 0; i < 3; i++) {
            // Set up for later
            let companyName, companyTitle, companyLocation, startDate, endDate;
            if(i === 0 ){
                companyName = data.companyOne;
                companyTitle = data.titleOne;
                companyLocation =  data.locationOne;
                startDate = data.startOne;
                endDate = data.endOne;
            }
            else if (i === 1){
                companyName = data.companyTwo;
                companyTitle = data.titleTwo;
                companyLocation =  data.locationTwo;
                startDate = data.startTwo;
                endDate = data.endTwo;
            }
            else if(i === 2){
                companyName = data.companyThree;
                companyTitle = data.titleThree;
                companyLocation =  data.locationThree;
                startDate = data.startThree;
                endDate = data.endThree;
            }
            page.drawText(companyName + ", " + companyLocation, {
                x: 45 ,
                y: spaceCounter - tracker,
                size: fontSize,
                font: timesRomanFontBold,
                color: rgb(0, 0, 0),
            })
            page.drawText(companyTitle, {
                x: 45,
                y: spaceCounter - 15 - tracker,
                size: fontSize,
                font: timesRomanFontBold,
                color: rgb(0, 0, 0),
            })
            let textHolder = startDate.substring(0, 4) + " - "+ endDate.charAt(0).toUpperCase() + endDate.slice(1);
            const dateWidth = customFont.widthOfTextAtSize(textHolder, 12);
            page.drawText(textHolder, {
                x: width - (30 + dateWidth),
                y: spaceCounter - tracker,
                size: fontSize,
                font: timesRomanFont,
                color: rgb(0, 0, 0),
            })
            // Experience date array
            let experienceArray = [];
                if(i === 0){
                    experienceArray.push(data.experienceOneOne, data.experienceOneTwo, data.experienceOneThree, data.experienceOneFour) 
                }
                else if (i === 1){
                    experienceArray =[];
                    experienceArray.push(data.experienceTwoOne, data.experienceTwoTwo, data.experienceTwoThree, data.experienceTwoFour) 
                }
                else{
                    experienceArray =[];
                    experienceArray.push(data.experienceThreeOne, data.experienceThreeTwo, data.experienceThreeThree, data.experienceThreeFour) 
                }
            // For loop
            let spaceBetween = 30;
            for (let index = 0; index < experienceArray.length; index++) {
                let experienceState;
                if(index === 0){
                    experienceState = experienceArray[0]
                }
                else if (index === 1){
                    experienceState = experienceArray[1]
                }
                else if (index === 2){
                    experienceState = experienceArray[2]
                }
                else{
                    experienceState = experienceArray[3]
                }
                // let spaceBetween = 30;
                let sentences = [];
                // sentences = data.experienceOneOne.match(/\S.{0,96}(?=\s+|$)/g);
                sentences = experienceState.match(/\S.{0,97}(?=\s+|$)/g);
                let currentLineText = "" + sentences[0];
                if(sentences.length === 1){
                    page.drawText("•    " + currentLineText, {
                        x: 50,
                        y: spaceCounter - (tracker + spaceBetween),
                        size: fontSize,
                        font: timesRomanFont,
                        color: rgb(0, 0, 0),
                    })
                    spaceBetween += 15;
                }
                else{
                    for(let pos = 0; pos <= sentences.length-1; pos++){
                        if(pos === 0){
                            page.drawText("•    " + sentences[pos], {
                                x: 50,
                                y: spaceCounter - (tracker + spaceBetween),
                                size: fontSize,
                                font: timesRomanFont,
                                color: rgb(0, 0, 0),
                            })
                        }
                        else if (pos !== 0){
                            let currentLine = "" + sentences[pos];
                            page.drawText(currentLine, {
                            // page.drawText(sentences[pos], {
                                x: 50,
                                y: spaceCounter - (tracker + spaceBetween),
                                size: fontSize,
                                font: timesRomanFont,
                                color: rgb(0, 0, 0),
                            })
                        }
                    spaceBetween += 15;
                    }
                }       
            }
            tracker += spaceBetween;
        }
        spaceCounter -= tracker;
        // Education
        page.drawText("Education", {
            x: 30,
            y: spaceCounter,
            // y: 7 * fontSize,
            size: fontSize,
            font: timesRomanFontBold,
            color: rgb(0, 0, 0),
        })
        spaceCounter -= 15;
        page.drawText(data.university, {
            x: 40,
            y: spaceCounter,
            size: fontSize,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        let dateHolder = data.startOne.substring(0, 4) + " - "+ data.endOne.charAt(0).toUpperCase() + data.endOne.slice(1);
        const dateWidthEnd = customFont.widthOfTextAtSize(dateHolder, 12);
        page.drawText(data.startDate.substring(0, 4) + " - " +(data.endOne.charAt(0).toUpperCase() + data.endOne.slice(1)), {
            x: width - (30 + dateWidthEnd),
            y: spaceCounter,
            size: fontSize,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        spaceCounter -= 15;
        page.drawText(data.degree, {
            x: 40,
            y: spaceCounter,
            size: fontSize,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        // page.drawText("GPA: " + data.gpa, {
        //     x: 40,
        //     y: 3 * fontSize,
        //     size: fontSize,
        //     font: timesRomanFont,
        //     color: rgb(0, 0, 0),
        // })
        // Download
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, "Resume.pdf", "application/pdf");
    }
    return (
        <div>
            <button className="print-button" onClick={downloadPdf}>PDF</button>
        </div>
    )
}
export default PfDownload;