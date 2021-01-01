import React, { Component } from 'react';
import HEADER from "./tutoring.jpeg";
import "./Tutoring.scss";
import TutoringCalendar from './TutoringCalendar';
import TutorSelect from "./TutorSelect";


export default class Tutoring extends Component {
    render() {
        return (
            <div className="Tutoring">
                <div className="TutoringHeader">
                    <div className="TutoringTextOverlay">
                        TUTORING
                    </div>
                    <img src={HEADER} className="TutoringHeaderImage" />
                </div>
                <div className="AboutTutoring">
                    <b className="TitleFont">
                        What is HKN Tutoring?
                    </b>
                    <div className="TutoringText">
                        As an organization centered around academics, HKN at UCLA provides one-on-one tutoring
                        from our officers and members for lower division math and physics, as well as most
                        upper-division ECE courses. If you have questions about a class in ECE, our members
                        will gladly assist you. Additionally, if you need any career advice, we also have students
                        with internship experiences who can help you look over your  resume and answer any questions.<br /> <br />

                        Peer-to-peer tutoring is offered from Monday to Friday 12PM – 7PM every quarter, Weeks 3 – 9.
                        All tutoring is walk-in based with no reservations required, and as we learn remotely, we can
                        be found at
                        our <b><a className="Link" href="https://discord.gg/VeTvr2R" target="_blank">Discord Server</a></b>.
                        Feel free to pop in and talk to officers, or leave questions on the channels related to your class! <br /><br />
                    </div>
                </div>
                
                <div className="FindTutor">
                    <b className="TitleFont">
                        Find a Tutor <br/>
                    </b>
                    <div className="TutoringForm">
                        What subject are you looking for help in?
                        <TutorSelect/>  
                    </div>
                </div>
                <div style={{height: '50px'}}/>
            </div>
        )
    }
}
