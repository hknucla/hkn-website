import React, {Component,} from "react";
import TEST from "./hw1-student.pdf";
import "./TestBank.scss"
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class TestBank extends Component{

    render(){        
        return(
            <div onContextMenu={(e) => e.preventDefault()} className="pdf-container">
                <Document file={TEST} className="viewer">
                    <Page pageNumber={1} className="page" width="800"/>
                    <Page pageNumber={2} className="page" width="800" />
                    <Page pageNumber={3} className="page" width="800" />
                    <Page pageNumber={4} className="page" width="800" />
                    <Page pageNumber={5} className="page" width="800" />
                </Document>
            </div>
        );
    }
} 