import React, { Component } from "react";

class Task extends Component{
    render(){
        if(this.props.done === "1"){
            return (<p>&emsp;<s>{this.props.task}</s> &#10003;</p>);
        }
        else {
            return (<p>&emsp;{this.props.task}</p>);
        }
    }
}

export default class Inductee extends Component{
    
    render(){
        return(
            <div className="InducteeTodo">
                <h2>Inductee To-Do List</h2>
                <div className="InducteeContents">
                    <h3>Due: October 19, 2020</h3>
                    <Task task="Submit HKN Candidate Profile" done="1"/>
                    <h3>Due: November 22, 2020</h3>
                    <Task task="Upload Resume" done="1"/>
                    <Task task="Professor interview write-up" done="1"/>
                    <Task task="Submit exams to test bank" done="0"/>
                    <Task task="Candidate Interview" done="0"/>
                    <h3>Due: December 1, 2020</h3>
                    <Task task="Hug a dog" done="0"/>
                    <h3>Due: December 13, 2020</h3>
                    <Task task="Buy Kayla another dog" done="0"/>
                    <Task task="Start a dog farm" done="0"/>
                </div>
                
            </div>
        );
    }
}