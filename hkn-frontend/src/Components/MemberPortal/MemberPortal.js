import React, { Component } from "react";
import MemberAgenda from "./MemberAgenda";
import MemberPoints from "./MemberPoints";
import Inductee from "./Inductee"

export default class MemberPortal extends Component {
  render() {
    return(
      <div className="MemberPortal">
        <h1>Member Name</h1>
        <div className="Boxes">
          <MemberAgenda />
          <Inductee/>
          <MemberPoints/>
        </div>
        <div className="tinytext">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}
