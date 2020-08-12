import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
class InfoPage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          paddingTop: "70px",
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: "20px",
        }}
        className="container col-lg-10 col-md-10 col-sm-10 col-xs-12 col-12"
      >
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <h5
            id="info"
            className="container col-lg-6 col-md-6 col-sm-10 col-xs-10 col-10"
          >
            <span id="info-header">Earn today with </span>
            Ladder Investment
          </h5>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounce"
          initiallyVisible={true}
          animateOnce={true}
        >
          You will get profit of 60% ROI in 3 days on your first Investment and
          subsequently get 60% in 3 days!
        </ScrollAnimation>
      </div>
    );
  }
}

export default InfoPage;
