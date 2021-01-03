import React, { Component, } from "react";
import "./TestBank.scss"

export default class TestAdder extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedFile: null
        }
    };

    onFileChange=(event)=>{
        this.setState({selectedFile: event.target.files[0]});
    }

    onFileUpload=()=>{
        if(this.state.selectedFile==null)
            return;
        alert("Upload file: "+this.state.selectedFile.name);
    }

    render(){
        return(
            <div className="AddExam">
                <b className="TitleFont">Add an Exam</b><br />
                <div className="ExamSubmit">
                    <input type="file" onChange={this.onFileChange} className="ChooseFile"/>
                    <input type="submit" onClick={this.onFileUpload} className="Upload" value="Upload"/>
                </div>
            </div>
        );
    }
}