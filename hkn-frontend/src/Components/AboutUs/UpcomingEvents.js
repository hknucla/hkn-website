import React, { Component } from 'react'
import "./UpcomingEvents.scss"

class UpcomingEventsCard extends Component{
    render(){
        return(
            
            <div className="UpcomingEvent">
                <img src={this.props.image} className="UpcomingEventImage" />
                <div className="UpcomingEventTextWrapper">
                    <br /> 
                    <div className="UpcomingEventText">
                        {this.props.date} < br />
                        <b className="UpcomingEventBigText">
                            {this.props.name}
                        </b> < br />
                        {this.props.time} | {this.props.loc}< br />
                    </div>
                    <br /> 

                </div>
            </div>
        )
    }
}

export default class UpcomingEvents extends Component {
    importAll = (r) => {
        return r.keys().map(r);
    }

    createCards = (imgPaths) => {
        const cards=[]
        for(const imgPath of imgPaths){
            cards.push(
                <UpcomingEventsCard image={imgPath} date="April 20, 2020"
                    name="LaTeX Workshop" time="9pm-10pm" loc="Boelter 1234" />
            )
        }
        return cards
    }


    render() {
        const images = this.importAll(require.context('./UpcomingEventImages/', false, /\.(png|jpe?g|svg)$/));
        const cards= this.createCards(images)
        return (
            <div className="UpcomingEvents">
                {cards}
            </div>
        )
    }
}
