import React, { Component } from "react";
import "./MemberPortal.scss"
import TUTOR from "./teacher.png"
import PROFESSIONAL from "./work.png"
import SOCIAL from "./smile.png"
import TRASH from "./trash.png"

export default class EventCard extends Component {
    constructor(){
        super();
        this.state={
            expanded: "events"
        };
    }
    render() {
        return (
            <button className={this.state.expanded}>
                <div>
                    <br/><b>Event Name:<br/></b>
                    <i>Details:</i><br/>
                    When: 4/20/69 1:73:80 AM - 12:20:20 PM<br/>
                    Where: Location<br/><br/>
                </div>
                <div className="eventsOpts">
                    <b>Other Details:</b><br /><br />
                    <button className="eventCardButton"><img src={PROFESSIONAL} className="eventCardButton" alt="Professional Event" style={{ height: '35px', width: '35px' }}/></button>
                    <button className="eventCardButton"><img src={TUTOR} className="eventCardButton" alt="Tutoring Event" style={{ height: '35px', width: '35px' }}/></button>
                    <button className="eventCardButton"><img src={SOCIAL} className="eventCardButton" alt="Social Event" style={{ height: '35px', width: '35px' }}/></button>
                    <button className="eventCardButton" ><img src={TRASH} className="eventCardButton" alt="Professional Event" style={{ height: '35px', width: '35px' }} /></button>
                </div>
            </button>
        );
    }
}