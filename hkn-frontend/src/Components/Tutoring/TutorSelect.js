import React, { Component } from 'react';
import "./Tutoring.scss";
import TutoringCalendar from "./TutoringCalendar"

export default class TutorSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectValue: 'COM SCI',
            numValue: '1'
        };
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    csNums=['1', '30', '31', '32', '33', '35L', 'M51A', 'M51B', '111', '118', '180']
    eeNums=['1','2','2H','3','10','10H','11L','M16','19','89','99','100',
            '101A','101B','102','110','110H','110L','111L','112','113']
    mathNums=['31A', '31B', '32A', '32B', '33A', '33B', '61']
    physNums=['1A', '1B', '1C', '4AL', '4BL']

    tutors={
        Athya: ['COM SCI 1', 'COM SCI 111'],
        Kayla: ['MATH 31A', 'PHYSICS 1B'],
        Nico: ['EC ENGR 102', 'EC ENGR 113']
    }

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
        const sub=event.target.value;
        this.setState({subjectValue: sub});
        this.setState({numValue: this.getNums(sub)[0]});
    }

    handleNumChange(event) {
        this.setState({ numValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const subject=this.state.subjectValue + ' ' + this.state.numValue;
        // get names that correspond to subject
        var highlighted=[]
        for (const[key,value] of Object.entries(this.tutors)){
            if(value.includes(subject)){
                highlighted.push(key);
            }
        }
        // send highlighted names to calendar
        this.calendar.updateHighlighted(highlighted);
    }

    makeNums(arr){
        const nums=[];
        for(const num of arr){
            nums.push(<option value={num}>{num}</option>);
        }
        return nums;
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="TutorSelectForm">
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
                    <input type="submit" value="Search" className="Submit"/>
                </form>
                <TutoringCalendar ref={instance => { this.calendar = instance; }} className="TutoringCalendar" />

            </div>
        );
    }
}