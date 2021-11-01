import React from 'react';
import './docx.css'

// Dependencies
import { saveAs } from 'file-saver';
import { Document,  Packer, Paragraph, AlignmentType, TextRun, TabStopType,TabStopPosition } from 'docx';
// import * as fs from "fs";

const WordDocument = (props) => {
    const { data } = props;
    // Set Up for data
    let experience = 
        {
            experienceOne: {
                // companyOne: data.companyOne,
                // locationOne: data.locationOne,
                // titleOne: '',
                // startOne: '',
                // endOne: '',
                experienceOneOne: data.experienceOneOne,
                experienceOneTwo:data.experienceOneTwo,
                experienceOneThree:data.experienceOneThree,
                experienceOneFour:data.experienceOneFour,
            // },
            // experienceTwo: {
                // companyTwo: data.companyTwo,
                // locationTwo: '',
                // titleTwo: '',
                // startTwo: '',
                // endTwo: '',
                experienceTwoOne:data.experienceTwoOne,
                experienceTwoTwo:data.experienceTwoTwo,
                experienceTwoThree:data.experienceTwoThree,
                experienceTwoFour:data.experienceTwoFour,
            // },
            // experienceThree: {
                // companyThree: '',
                // locationThree: '',
                // titleThree: '',
                // startThree: '',
                // endThree: '',
                experienceThreeOne:data.experienceThreeOne,
                experienceThreeTwo:data.experienceThreeTwo,
                experienceThreeThree:data.experienceThreeThree,
                experienceThreeFour:data.experienceThreeFour,
            }
        }
    
    // First and Last Name
    const headingSection = new Paragraph({
        children: [new TextRun(data.firstName + " " + data.lastName)],
        alignment: AlignmentType.CENTER,
        bold: true,
        spacing: {
            before: 200,
        },
    });
    // Phone Number and Email
    let phoneFormat = '(' + data.phoneNumber.substring(0, 3) + ') ' + data.phoneNumber.substring(3, 6) + ' - ' + data.phoneNumber.substring(6, 10)
    const infoSection = new Paragraph({
        children: [new TextRun(phoneFormat + " • " + data.usersEmail)],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 100,
        },
        thematicBreak: true
    });
    // Experience 
    const experienceHeading = new Paragraph({
        children: [new TextRun("Experience")],
        spacing: {
            before: 100,
        },
    });    
    // console.log("company pne" + experience.experienceOne.companyOne)
    let dateNumMonth = data.startOne.substring(5,7);
    let dateMonth; 
    // console.log("data=" +dateNumMonth)
    const listMonths = { '01':'January', '02': 'February', '03': 'March', '04':'April', '05':'May', '06':'June', '07':'July', '08':'August', '09':'September', '10':'October', '11':'November', '12':'December'};
    for (const [key, value] of Object.entries(listMonths)) {
        `${key}` === dateNumMonth ? dateMonth = `${value}`: console.log("error");
    }
    // Experience date
    let dateTime = dateMonth + " " + data.startOne.substring(0,4) + " - " + data.endOne.charAt(0).toUpperCase() + data.endOne.substring(1);
    const experienceSectionOne = new Paragraph({
        children: [new TextRun(data.companyOne), new TextRun('\t' + dateTime)],
        tabStops: [
            {
                type: TabStopType.RIGHT,
                position: TabStopPosition.MAX,
            },
            {
                type: TabStopType.RIGHT,
                position: 9000,
            },
        ],
    });
    // Experience Bullets

    let arrayNww = [];
    for (const [key, value] of Object.entries(experience)) {
        console.log(`${key}: ${value}`);
        const experienceSectionOne = new Paragraph({
            children: [new TextRun(data.companyOne), new TextRun('\t' + dateTime)],
            tabStops: [
                {
                    type: TabStopType.RIGHT,
                    position: TabStopPosition.MAX,
                },
                {
                    type: TabStopType.RIGHT,
                    position: 9000,
                },
            ],
        });
    }
    // Creating Word Document
    const doc = new Document({
        sections: [{
            properties: {},
            children: [headingSection, infoSection, experienceHeading, experienceSectionOne],
        }],
    })
    // Print document
    const print = () => {
        Packer.toBlob(doc).then(blob => {
            // console.log(blob);
            saveAs(blob, "example.docx");
            console.log("Document created successfully");
        });
    }
    return (
        <div>
            <button className="print-button" onClick={print}>Microsoft Word</button>
        </div>
    )
}
export default WordDocument;