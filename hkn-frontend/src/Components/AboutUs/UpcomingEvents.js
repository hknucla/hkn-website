import React, { Component } from 'react'

class UpcomingEventsCard extends Component{
    render(){
        return(
            
            <div className="UpcomingEvent">
                <img src={this.props.image}/>
                {this.props.date} <br/>
                {this.props.name} <br />
                {this.props.time} | {this.props.loc}< br />
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
        const images = this.importAll(require.context('./EventImages/', false, /\.(png|jpe?g|svg)$/));
        const cards= this.createCards(images)
        console.log(cards)
        return (
            <div className="UpcomingEvents">
                {cards}
            </div>
        )
    }
}
