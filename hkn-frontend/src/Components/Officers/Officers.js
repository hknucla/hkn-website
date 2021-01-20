import React, { Component } from 'react'
import './Officers.scss'
import HEADER from "./officermain.jpg";
import OfficersData from "./OfficersData";

{/*Each Officer consists of an image, position, name, and email*/}
class OfficerCard extends Component {
    render(){
        return(
            <div className="Officer">
                <div className="ImageWrapper">
                    <img src = {this.props.imgPath} className="Image" />
                    <div className="EmailOverlay">
                        <div className= "BioText"> {this.props.bio} </div>
                    </div>
                </div>
                <div className="DescriptionWrapper">
                    <br />
                    <div className="Description">
                        <b className="DescriptionBigText"> {this.props.position} </b> <br/>
                        {this.props.name} <br/>
                        <a className = "EmailText" href={`mailto:${this.props.email}`}> {this.props.email} </a>
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
        for(let i = 0; i < imgPaths.length; i++)
            cards.push(
                //goes through the # of images in OfficerImages Folder and takes
                // corresponding entry in OfficerData.js file (just an array) to fill
                // in the rest of the information
                <OfficerCard
                    key = {OfficersData[i].id}
                    name = {OfficersData[i].name}
                    imgPath = {imgPaths[i]}
                    email = {OfficersData[i].email}
                    position = {OfficersData[i].position}
                    bio = {OfficersData[i].bio}
                    />
            )

        return cards
    }
    render() {
        {/*Get all picture files from officer iamges folder and put information in images*/}
        const images = this.importAll(require.context('./OfficerImages/', false, /\.(png|jpe?g|JPE?G|svg)$/));
        const Officercards = this.createCards(images)
        return (
            <div className="Officers">
                {/*OfficersHeader contains the picture and "OFFICER" text overlay*/}
                <div className="OfficersHeader">
                    <div className="OfficersTextOverlay">
                        OFFICERS
                    </div>
                    <img src={HEADER} className="OfficersHeaderImage" />
                </div>
                 {/*OfficersBody contains the short description and officer cards*/}
                <div className="OfficersBody">
                    <div className="TitleFont2">
                        <b> Meet our Officers </b>
                    </div>
                    <br/>
                    <div className="BodyText">
                        Hover over each picture for more details
                    </div>
                    <div className="OfficerCards">
                    {Officercards}
                    </div>
                </div>
            </div>
        )
    }
}
