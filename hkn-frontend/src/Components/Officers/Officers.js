import React, { Component } from 'react'
import './Officers.scss'
import HEADER from "./officermain.jpg";
import OfficersData from "./OfficersData";

class OfficerCard extends Component {
    render(){
        return(
            <div className="Officer">
                <div className="ImageWrapper">
                    <img src = {this.props.imgPath} className="Image" />
                    <div className="EmailOverlay">
            {/*<div className = "EmailText"> */}
                        <a className = "EmailText" href={`mailto:${this.props.email}`}> {this.props.email} </a>
        {/*   {this.props.email}
                        </div> */}
                    </div>
                </div>
                <div className="DescriptionWrapper">
                    <br />
                    <div className="Description">
                        <b className="DescriptionBigText"> {this.props.position} </b> <br/>
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
}

export default class Officers extends Component {
    importAll = (r) => {
        return r.keys().map(r);
    }
    createCards = (imgPaths) => {
        const cards = []
        //for (const path of imgPaths) {
        for(let i = 0; i < imgPaths.length; i++)
            /*let nameExtract = "Bob";
            let emailExtract = "bob@gmail.com";
            let positionExtract = "President"
             */
            cards.push(
                //basically need to figure out how to extract elements from my path
                <OfficerCard
                    key = {OfficersData[i].id}
                    name = {OfficersData[i].name}
                    imgPath = {imgPaths[i]}
                    email = {OfficersData[i].email}
                    position = {OfficersData[i].position}
                    />
            )

        return cards
    }
    render() {
        const images = this.importAll(require.context('./OfficerImages/', false, /\.(png|jpe?g|JPE?G|svg)$/));
        const Officercards = this.createCards(images)
        return (
            <div className="Officers">
                <div className="OfficersHeader">
                    <div className="OfficersTextOverlay">
                        OFFICERS
                    </div>
                    <img src={HEADER} className="OfficersHeaderImage" />
                </div>
                <div className="OfficersBody">
                    {Officercards}
                </div>
            </div>
        )
    }
}
