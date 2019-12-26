import React, { Component } from "react";
import Homepage from "../Homepage/Homepage";
import Events from "../Events/Events";
import AboutUs from "../AboutUs/AboutUs";
import Tutoring from "../Tutoring/Tutoring";
import MemberPortal from "../MemberPortal/MemberPortal";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Header.scss";

const Notfound = () => <h1>Route not found</h1>;

export default class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="header">
            <div className="title">Eta Kappa Nu</div>
            <div className="links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/tutoring">Tutoring</Link>
                </li>
                <li>
                  <Link to="/member">Member</Link>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/events" component={Events} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/tutoring" component={Tutoring} />
            <Route path="/member" component={MemberPortal} />
            <Route exact path="/" component={Homepage} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
