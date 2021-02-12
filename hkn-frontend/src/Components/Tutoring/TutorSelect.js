import React, { Component } from 'react';
import "./Tutoring.scss";
import TutoringCalendar from "./TutoringCalendar";
import subjectData from './data/subject_data';

export default class TutorSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectValue: 'COM SCI',
            numValue: '31',
            subjectData: subjectData
        };
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubjectChange(event) {
        const sub=event.target.value;
        this.setState({subjectValue: sub});
        this.setState({ numValue: Object.keys(this.state.subjectData[sub])[0]});
    }

    handleNumChange(event) {
        this.setState({ numValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const subject=this.state.subjectValue + ' ' + this.state.numValue;
        // get uid's corresponding to that topic
        const uids = this.state.subjectData[this.state.subjectValue][this.state.numValue];
        // send highlighted uids to calendar
        this.calendar.updateHighlighted(uids);
    }

    makeOpts(arr){
        const opts=[];
        for (const opt of arr){
            opts.push(<option value={opt}>{opt}</option>);
        }
        return opts;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="TutorSelectForm">
                    <label className="Select1">
                        <select id='subject' value={this.state.subjectValue} onChange={this.handleSubjectChange}>
                            {this.makeOpts(Object.keys(this.state.subjectData))}
                        </select>
                    </label>
                    <label className="Select2">
                        <select subject='num' value={this.state.numValue} onChange={this.handleNumChange}>
                            {this.makeOpts(Object.keys(this.state.subjectData[this.state.subjectValue]))}
                        </select>
                    </label>
                    <input type="submit" value="Search" className="Submit"/>
                </form>
                <TutoringCalendar ref={instance => { this.calendar = instance; }} className="TutoringCalendar" />

            </div>
        );
    }
}