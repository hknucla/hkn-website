import React, { Component } from 'react'
import "./Gallery.scss"

export default class Gallery extends Component {
    importAll = (r) => {
        return r.keys().map(r);
    }

    createCards = (imgPaths) => {
        const cards = []
        for (const imgPath of imgPaths) {
            cards.push(
                <img src={imgPath} className="GalleryImage"/>
            )
        }
        return cards
    }


    render() {
        const images = this.importAll(require.context('./GalleryImages/', false, /\.(png|jpe?g|svg)$/));
        const cards = this.createCards(images)
        return (
            <div className="Gallery">
                {cards}
            </div>
        )
    }
}
