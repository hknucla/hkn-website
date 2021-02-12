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
                        HKN stands for Eta Kappa Nu. We are an international Honor Society for Electrical and
                        Computer Engineering. HKN at UCLA aims to enable fellow engineering students
                        to excel in both personal and professional settings. <br /><br />

                        By organizing peer-to-peer tutoring, various workshops, review sessions, and career fairs, 
                        HKN wants to support and connect our engineering students with the best resources to enable
                        them to succeed in academics and to explore their career options. Some of our
                        most popular events include course review sessions, company info sessions,
                        resume reviews, and professor lunches. <br /><br />

                        The members of HKN at UCLA are the top ¼ of the Junior class or top ⅓ of the Senior class 
                        of undergraduate Electrical and Computer Engineering students. We are an invite-only 
                        organization, but if you would like to keep up-to-date with HKN, feel free to sign up for our
                        newsletter <b><a href="https://forms.gle/k3vJ33Z24VGQxVXD9" className="Link" target="_blank">here</a></b>.
                    </div>
                    <img className="GroupShot" src={GROUP} />
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="UpcomingEventsComponent">
                    <b>Upcoming Events</b><br />
                    {/*<UpcomingEvents/>*/}
                    <div className = "EventsText"> Sorry, website under construction. Sign up for 
                    our <b><a href="https://forms.gle/k3vJ33Z24VGQxVXD9" className="Link" target="_blank">newsletter</a></b> for updates on the latest events!
                    </div>
                </div>
                <div className="TutoringComponent">
                    <b className="TutoringTitle">Tutoring</b><br /> 
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
                        Feel free to pop in and talk to officers, or leave questions on the channels related to your class! <br/><br/>
                        Check out our <b><Link to="/tutoring" className="Link">Tutoring Page</Link></b> for 
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
