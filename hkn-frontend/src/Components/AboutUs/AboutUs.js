import React, { Component } from 'react'
import ROYCE from './royce.jpeg'
import GROUP from './group.png'
import TUTOR from './tutoring.png'
import './AboutUs.scss'
import UpcomingEvents from './UpcomingEvents'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                <div className="ImageContainer">
                    <div className="TextOverlay">
                        UCLA's <br />
                        ELECTRICAL & COMPUTER ENGINEERING<br />
                        HONOR SOCIETY<br />
                    </div>
                    <img className="Royce" src={ROYCE} width='100%' height='auto' />
                </div>

                <div className="About">
                    <b className="AboutTitle">
                        About
                    </b><br/>
                    <div className="AboutText">
                        Founded at the University of Illinois in 1904, HKN consists of students,
                        alumni, and other professionals who have demonstrated exceptional academic
                        and professional accomplishments in the electrical and computer engineering
                        fields. <br /><br />
                        UCLA's own chapter, the <b>Iota Gamma Chapter</b>, was founded on March 
                        24, 1984, by Professor Alan Willson. Professor Benjamin Williams serves as our
                        current advisor. <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet odio ut 
                        odio dictum porta. Suspendisse suscipit malesuada erat, fringilla placerat velit 
                        lacinia id. Nullam in felis id ipsum consectetur efficitur. Nullam sollicitudin 
                        ex non nulla pellentesque aliquet. Fusce diam quam, sagittis id est sed, sodales 
                        ultrices diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec sit amet auctor nibh, eu condimentum sapien. <br /><br />
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
                        HKN tutors are all students who qualify as the top ¼ of Junior class and the top 
                        1/3 of Senior class. We pride ourselves in our academic excellence. 
                        If you have questions about a class, we most likely will have Junior and Senior 
                        students who took the class already to help you. <br /> <br />
                        If you need career advices, 
                        we also have students with internship experiences to help you look over your 
                        resume and answer any questions.  As an organization, we want to support our 
                        fellow engineering students as much as possible from all aspects.
                    </div>
                    <img src={TUTOR} className="TutoringImage" />
                </div>
            </div>
        )
    }
}
