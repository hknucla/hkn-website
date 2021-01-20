
/*import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import HEADER from "../Inductee/officermain.jpg";
/*
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
import HEADER from "../Officers/officermain.jpg";
//import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';
import ProgressBar from './ProgressBar/ProgressBar.js';
const ProgressBarContainer = styled.div`
width: 300px;
margin-top:200px;
`;
export default class Inductee extends Component {
    render() {
        {/*Get all picture files from officer iamges folder and put information in images*/}
        return (
            <div className="Inductee">
                {/*InducteeHeader contains the picture and "OFFICER" text overlay*/}
                <div className="InducteeHeader">
                    <div className="InducteeTextOverlay">
                        MEMBERS
                    </div>
                    <img src={HEADER} className="InducteeHeaderImage" />  
                </div>
                <div className= "InducteeBody">
                    <div>
                      TESTER
                    </div>
                    <ProgressBarContainer>
                      <ProgressBar/>
                    </ProgressBarContainer>
                </div>

            </div>
        )
    }
}

