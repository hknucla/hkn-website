import React, {Component,} from "react";
import TEST from "./hw1-student.pdf";
import TESTBANKHEADERIMG from "./testbank.jpg";
import "./TestBank.scss"
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class TestBank extends Component{

    render(){        
        return(
            <div className="TestBank">
                <div className="TestBankHeader">
                    <div className="TestBankTextOverlay">TEST BANK</div>
                    <img src={TESTBANKHEADERIMG} className="TestBankHeaderImage"/>
                </div>
                <div className="AboutTestBank">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="ViewTests">
                    
                </div>
            </div>

            // <div onContextMenu={(e) => e.preventDefault()} className="pdf-container">
            //     <Document file={TEST} className="viewer">
            //         <Page pageNumber={1} className="page" width="800"/>
            //         <Page pageNumber={2} className="page" width="800" />
            //         <Page pageNumber={3} className="page" width="800" />
            //         <Page pageNumber={4} className="page" width="800" />
            //         <Page pageNumber={5} className="page" width="800" />
            //     </Document>
            // </div>
        );
    }
} 