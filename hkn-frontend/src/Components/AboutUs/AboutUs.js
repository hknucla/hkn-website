import React, { Component } from 'react'
import ROYCE from './royce.jpeg'
import GROUP from './group.png'
import TUTOR from './tutoring.png'
import './AboutUs.scss'
import UpcomingEvents from './UpcomingEvents'
import Gallery from './Gallery.js'
import { Link} from "react-router-dom";

export default class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                <div className="Cover"/>
                <div className="ImageContainer">
                    <div className="TextOverlay">
                        UCLA's <br />
                        ELECTRICAL & COMPUTER ENGINEERING<br />
                        HONOR SOCIETY<br />
                    </div>
                    <img className="Royce" src={ROYCE} width='100%' height='auto' />
                </div>

                <div className="About" id="About">
                    <b className="AboutTitle">
                        About
                    </b><br/>
                    <div className="AboutText">
                        HKN stands for Eta Kappa Nu. We are an international Honor Society for Electrical 
                        and Computer Engineering. HKN at UCLA aims to enable fellow engineering students 
                        to excel in both personal and professional settings. <br /><br/>
                        By organizing peer to peer 
                        tutoring, various workshops, review sessions, and career fairs, HKN wants to 
                        support and connect our engineering students with the best resources to enable 
                        them to succeed in academics and to explore their career options. Some of our 
                        most popular events include course review sessions, company info sessions, 
                        resume reviews, and professor lunches. <br /><br />
                        HKN is an invitation only organization. The members of HKN at UCLA are among 
                        the most outstanding undergraduate Electrical and Computer Engineering students. 
                        To qualify for induction, the candidate must be top ¼ of the Junior class or 
                        top ⅓ of the Senior class.
                    </div>
                    <img className="GroupShot" src={GROUP} />
                </div>    
                <div className="UpcomingEventsComponent">
                    <b>Upcoming Events</b><br /> 
                    <UpcomingEvents/>
                </div>
                <div className="TutoringComponent">
                    <b className="TutoringTitle">Tutoring</b><br /> 
                    <div className="TutoringText">
                        HKN Tutoring offers peer to peer tutoring from Monday to Friday 10am – 5pm every quarter. 
                        All tutoring is walk-in based with no reservations required at ENGR IV 67-127, the 
                        undergraduate lounge. If you have any questions, please feel free to walk in and talk 
                        to anyone. <br /> <br />
                        Come get help from top students in engineering! 
                        HKN tutors are all students who qualify as the top 1/4 of Junior class and the top 
                        1/3 of Senior class. We pride ourselves in our academic excellence. 
                        If you have questions about a class, we most likely will have Junior and Senior 
                        students who took the class already to help you. <br /> <br />
                        If you need career advices, 
                        we also have students with internship experiences to help you look over your 
                        resume and answer any questions.  As an organization, we want to support our 
                        fellow engineering students as much as possible from all aspects. <br/><br/>
                        Check out our <b><Link to="/tutoring" className="TutoringLink">Tutoring Page</Link></b> for 
                        more information.
                    </div>
                    <img src={TUTOR} className="TutoringImage" />
                </div>
                <div className="GalleryComponent">
                    <b className="GalleryTitle">Gallery</b><br /> 
                    <Gallery className="Gallery"/>
                </div>
            </div>
        )
    }
}
