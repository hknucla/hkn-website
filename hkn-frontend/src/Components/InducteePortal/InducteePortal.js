

/*import React, { Component } from "react";
//import ProgressBar from 'react-bootstrap/ProgressBar';


class ProgressBar extends Component{
    render(){
        return(
            <div className="ProgressBar">
              <progress className= "Progress" value={this.props.value.toString()} max={this.props.max}>
              {this.props.value.toString()}%
              </progress>
            </div>

        )
    }
}

export default class InducteePortal extends Component {
  constructor(){
    super();
    this.state = {
      myProgress: 25,
    }
  }
  render() {
    return(
      <div className="Inductee">
          Inductee
      </div>
    );
  }
}
*/

import React, { Component } from 'react'
import './InducteePortal.scss'
import HEADER from "./night.jpg";
//import ProgressBar from 'react-bootstrap/ProgressBar'

class ProgressBar extends Component{
  render(){
      return(
    <div className="containerStyles">
      <div className="fillStyles">
        <span className="labelStyles">{`${this.props.completed}%`}</span>
      </div>
    </div>
  )
}
}

export default class Inductee extends Component {
    render() {
        /*Get all picture files from officer iamges folder and put information in images*/
        return (
            <div className="Inductee">
                {/*InducteeHeader contains the picture and "OFFICER" text overlay*/}
                <div className="InducteeHeader">
                    <div className="InducteeTextOverlay">
                        INDUCTEE
                    </div>
                   { <img src={HEADER} className="InducteeHeaderImage" alt="Royce and Powell at night"/>}
                </div>
                <div className="InducteeBody">
                  <div className="Progress">
                    <ProgressBar completed={60} />
                  </div>
                </div>

            </div>
        )
    }
}

