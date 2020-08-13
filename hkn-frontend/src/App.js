import React, { Component } from "react";
import Homepage from "./Components/Homepage/Homepage";
import Events from "./Components/Events/Events";
import AboutUs from "./Components/AboutUs/AboutUs";
import Tutoring from "./Components/Tutoring/Tutoring";
import MemberPortal from "./Components/MemberPortal/MemberPortal";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MAINPAGE from "./mainpage.jpg";
import "./App.scss";
import MAINICON from "./mainIcon.png"
import TestBank from "./Components/TestBank/TestBank";

const Notfound = () => <h1>Route not found</h1>;

export default class Header extends Component {
  render() {
    return (
      <div>
        <Router>
            <div className="header">
              <li><Link to="/aboutUs"><img src={MAINICON} style={{height: '75px', width: '300px' }}/></Link></li>
              <div className="links">
                <ul>
                  <li><Link to="/aboutUs" className="link">About</Link></li>
                  <li><Link to="/events" className="link">Events</Link></li>
                  <li><Link to="/tutoring" className="link">Tutoring</Link></li>
                  <li><Link to="/testBank" className="link">Test Bank</Link></li>
                  <li><Link to="/member" className="link">Login</Link></li>
                </ul>
              </div>
            </div>
          <Switch>
            <Route path="/events" component={Events} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/tutoring" component={Tutoring} />
            <Route path="/testBank" component={TestBank} />
            <Route path="/member" component={MemberPortal} />
          </Switch>
        </Router>
      </div>
    );
  }
}
