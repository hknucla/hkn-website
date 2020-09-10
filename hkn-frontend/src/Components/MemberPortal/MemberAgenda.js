import React, {Component} from "react";
import "./MemberPortal.scss";
import EventCard from "./EventCard.js";
import PLUS from "./plus-sign-in-circle.png";

export default class MemberAgenda extends Component{
    constructor(){
        super();
        this.events=this.getEvents({name: "Member Name"});
    }
    getEvents=(props)=>{
        return (0);
    }
    render(){
        return(
            <div className="MemberAgenda">
                <h2>Your Events</h2>
                <button className="addEvent">
                    <img className="addEvent" src={PLUS} alt="Add Event" style={{height: '30px', width: '30px'}}/>
                </button>
                <div className="agendaWrapper">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        );
    }
}