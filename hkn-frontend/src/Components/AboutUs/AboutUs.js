import React, { Component } from 'react'
import ROYCE from './royce.jpeg'
import GROUP from './group.png'
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
                    </b>
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
                <div>
                    <UpcomingEvents/>
                </div>
            </div>
        )
    }
}
