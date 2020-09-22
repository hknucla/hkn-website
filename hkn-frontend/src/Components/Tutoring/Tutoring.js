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
                        HKN tutors are students who qualify as the top 1/4 of Junior class and the top
                        1/3 of Senior class. We pride ourselves in our academic excellence.
                        If you have questions about a class, we most likely will have Junior and Senior
                        students who took the class already to help you. Additionally, if you need any
                        career advice, we also have students with internship experiences who can help you look over your
                        resume and answer any questions.<br /> <br />
                        Peer-to-peer tutoring is offered from Monday to Friday 10am – 5pm every quarter.
                        All tutoring is walk-in based with no reservations required, and as we learn remotely, we can
                        be found at our <b><a className="Discord" href="https://discord.gg/VeTvr2R">Discord Server</a></b>.
                        Feel free to come in and ask any questions!
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
                    <TutoringCalendar/>
                </div>
            </div>
        )
    }
}
