import React, {Component} from "react";
import "./TestBank.scss";
import "./split_pane_style.css";
import {Document, Page, pdfjs} from "react-pdf";
import SplitPane from "react-split-pane";
import throttle from "lodash.throttle"


import TEST from "./hw1-student.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class TestViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            subjectValue: 'COM SCI',
            numValue: '1',
            pdfWidth: null,
            totalWidth: null
        }
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    csNums=['1', '30', '31', '32', '33', '35L', 'M51A', 'M51B', '111', '118', '180']
    eeNums=['1','2','2H','3','10','10H','11L','M16','19','89','99','100',
            '101A','101B','102','110','110H','110L','111L','112','113']
    mathNums=['31A', '31B', '32A', '32B', '33A', '33B', '61']
    physNums=['1A', '1B', '1C', '4AL', '4BL']

    getNums(sub) {
        if (sub === 'COM SCI') {
            return this.csNums;
        }
        else if (sub === 'EC ENGR') {
            return this.eeNums;
        }
        else if (sub === 'MATH') {
            return this.mathNums;
        }
        else if (sub === 'PHYSICS') {
            return this.physNums;
        }
    }

    handleSubjectChange(event) {
        const sub = event.target.value;
        this.setState({ subjectValue: sub });
        this.setState({ numValue: this.getNums(sub)[0] });
    }

    handleNumChange(event) {
        this.setState({ numValue: event.target.value });
    }

    makeNums(arr){
        const nums=[];
        for(const num of arr){
            nums.push(<option value={num}>{num}</option>);
        }
        return nums;
    }

    handleSubmit(event){
        event.preventDefault();
        const subject=this.state.subjectValue+' '+this.state.numValue; 
        alert("You are looking for tests in "+ subject);
    }

    setDivSize(){
        this.setState({ pdfWidth: this.pdfContainer.getBoundingClientRect().width})
        this.setState({ totalWidth: this.pdfContainer.getBoundingClientRect().width + this.listExams.getBoundingClientRect().width})

    }

    componentDidMount() {
        this.setDivSize()
    }


    render(){
        return(
            <div className="TestViewer">
                <div>
                    <b className="TitleFont">Find an Exam</b>
                    <form onSubmit={this.handleSubmit} className="SubjectSelect">
                        <label className="Select1">
                            <select id='subject' value={this.state.subjectValue} onChange={this.handleSubjectChange}>
                                <option value="COM SCI">COM SCI</option>
                                <option value="EC ENGR">EC ENGR</option>
                                <option value="MATH">MATH</option>
                                <option value="PHYSICS">PHYSICS</option>
                            </select>
                        </label>
                        <label className="Select2">
                            <select subject='num' value={this.state.numValue} onChange={this.handleNumChange}>
                                {this.makeNums(this.getNums(this.state.subjectValue))}
                            </select>
                        </label>
                        <input type="submit" value="Search" className="Submit" />
                    </form>
                </div>

                <div>
                    <SplitPane 
                        split="vertical" 
                        className="SplitPane"
                        style={{height: '800px', position: 'relative'}}
                        minSize={200}
                        maxSize={(this.state.totalWidth)/2}
                        onChange={()=> this.setDivSize()}
                    >
                        <div id="listExams" ref={(ref) => this.listExams = ref}>
                            This is a div
                        </div>
                        
                        <div onContextMenu={(e) => e.preventDefault()} 
                            id="pdfContainer" ref={(ref) => this.pdfContainer = ref}
                            className="pdf-container">
                            <Document file={TEST} className="viewer" width={this.state.pdfWidth}>
                                <Page pageNumber={1} className="page" width={this.state.pdfWidth}/>
                                <Page pageNumber={2} className="page" width={this.state.pdfWidth}/>
                            </Document>
                        </div>
                    </SplitPane>
                </div>
            </div>
        );
    }
}
