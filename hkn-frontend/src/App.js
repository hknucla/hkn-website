import React, { Component } from "react";
import Officers from "./Components/Officers/Officers";
import AboutUs from "./Components/AboutUs/AboutUs";
import Tutoring from "./Components/Tutoring/Tutoring";
import MemberPortal from "./Components/MemberPortal/MemberPortal";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import MAINICON from "./mainIcon.png"
import TestBank from "./Components/TestBank/TestBank";
import classnames from "classnames";
import ScrollToTop from "./ScrollToTop";

const Notfound = () => <h1>Route not found</h1>;

export default class Header extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      prevScrollpos: window.pageYOffset+10,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = (prevScrollpos > currentScrollPos) || currentScrollPos<150;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <ScrollToTop>
            <div className="headerTop"/>
            <div className={classnames("header", {
              "header--hidden": !this.state.visible
            })}>
              <li><Link to="/"><img src={MAINICON} style={{ height: '75px', width: '300px' }} /></Link></li>
              <div className="links">
                <ul>
                  <li><a href="/#About" className="link">About</a></li>
                  <li><Link to="/officers" className="link">Officers</Link></li>
                  <li><Link to="/tutoring" className="link">Tutoring</Link></li>
                  <li><Link to="/testBank" className="link">Test Bank</Link></li>
                  <li><Link to="/member" className="link">Login</Link></li>
                </ul>
              </div>
            </div>
            <Switch>
              <Route path="/officers" component={Officers} />
              <Route path="/tutoring" component={Tutoring} />
              <Route path="/testBank" component={TestBank} />
              <Route path="/member" component={MemberPortal} />
              <Route path="" component={AboutUs} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}