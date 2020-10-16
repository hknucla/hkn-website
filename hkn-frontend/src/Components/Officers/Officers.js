import React, { Component } from 'react'
import './Officers.scss'


class OfficerCard extends Component {
    render(){
        return(
            <div>
                {this.props.photo}
                {this.props.position}
                {this.props.name}
                {this.props.email}
            </div>
        )
    }
}

export default class Officers extends Component {
    render() {
        return (
            <div className="Officers">
                
            </div>
        )
    }
}
