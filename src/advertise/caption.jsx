import React, { Component } from "react";
import { render } from "react-dom";
import Typed from "react-typed";

class Caption extends Component {
  render() {
    return (
      <div
        className="container col-lg-7 col-md-7 col-sm-11 col-xs-11 col-11"
        id="main-caption"
      >
        <Typed
          strings={[
            "The leader in online Crowdfunding.",
            "Reliable fundraising platform.",
            "Harness the power of social media to spread your story and get more support.",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <br />
      </div>
    );
  }
}
export default Caption;
