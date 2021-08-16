import React from 'react';
import './docx.css'

// Dependencies
import { saveAs } from 'file-saver';
import { Document,  Packer, Paragraph, TextRun } from 'docx';
import * as fs from "fs";

const WordDocument = (props) => {
    const { data } = props;


const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun(data.firstName),
                    new TextRun({
                        text: "Foo Bar",
                        bold: true,
                    }),
                    new TextRun({
                        text: "\tGithub is the best",
                        bold: true,
                    }),
                ],
            }),
        ],
    }],
})

const print = () => {
    Packer.toBlob(doc).then(blob => {
        console.log(blob);
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