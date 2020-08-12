import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AdvertHome from "./home-comp";
import About from "./about";
import Contact from "./contacts";
import AdvertismentNavbar from "./advertise-navbar";
import Home from "./home";

class AdvertCover extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    );
  }
}

export default AdvertCover;
