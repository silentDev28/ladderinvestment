import React, { Component } from "react";

import SettingsVoiceIcon from "@material-ui/icons/SettingsVoice";
import LayersIcon from "@material-ui/icons/Layers";
import TimerIcon from "@material-ui/icons/Timer";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import BlockIcon from "@material-ui/icons/Block";
import ScrollAnimation from "react-animate-on-scroll";
class HowItWorks extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
        <div className="row">
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <SettingsVoiceIcon
                style={{
                  position: "absolute",
                  top: "-25px",
                  fontSize: "50px",
                  color: "#978f3e",
                  left: "40%",
                }}
              />
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10"
            style={{ color: "black" }}
          >
            <ScrollAnimation
              animateIn="bounce"
              initiallyVisible={true}
              animateOnce={true}
            >
              <h5 style={{ color: "#371979", fontWeight: "bold" }}>
                How It Works
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                Multiple streams of incomes outweighs single income, make an
                investment to create a second stream. Welcome to ladder
                investment, a platform where we all climb the ladder to the top.
                .
              </p>
              <p>
                The most simplified p2p with the best features on telegram and
                whatsapp our goal is to help our members achieve financial
                freedom
              </p>
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <LayersIcon
                style={{
                  position: "absolute",
                  top: "-25px",
                  fontSize: "50px",
                  color: "#978f3e",
                  left: "40%",
                }}
              />
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10"
            style={{ color: "black" }}
          >
            <ScrollAnimation
              animateIn="bounce"
              initiallyVisible={true}
              animateOnce={true}
            >
              <h5 style={{ color: "#371979", fontWeight: "bold" }}>
                Investment Plan:
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                <li style={{ listStyle: "none" }}>60% In 3 Days</li>
                <li style={{ listStyle: "none" }}>Minimum 5k </li>
                <li style={{ listStyle: "none" }}>Maximum 250k</li>
                <li style={{ listStyle: "none" }}>1k Activation Fee</li>
                <li style={{ listStyle: "none" }}>100% Recommitment</li>
                <li style={{ listStyle: "none" }}>Ph/Gh Counter</li>
                <li style={{ listStyle: "none" }}>Testimony Room</li>
                <li style={{ listStyle: "none" }}>
                  2% Continuous Referral Bonus{" "}
                </li>
                <li style={{ listStyle: "none" }}>
                  3% Continuous Guider Bonus{" "}
                </li>
                <li style={{ listStyle: "none" }}>Sitelock Protection </li>
                <li style={{ listStyle: "none" }}>Cloud-Flare Protection </li>
                <li style={{ listStyle: "none" }}>unlimited bandwidth</li>
                <li style={{ listStyle: "none" }}>Reactivation fee N3k</li>
              </p>
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <TimerIcon
                style={{
                  position: "absolute",
                  top: "-25px",
                  fontSize: "50px",
                  color: "#978f3e",
                  left: "40%",
                }}
              />
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10"
            style={{ color: "black" }}
          >
            <ScrollAnimation
              animateIn="bounce"
              initiallyVisible={true}
              animateOnce={true}
            >
              <h5 style={{ color: "#371979", fontWeight: "bold" }}>
                Payout Time
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                The system is programmed in such a way that once your time
                elpsed or failure to meet deadline for payment, the system will
                automatically deactivate your account. familarize yourself with
                the system. Reactivation fee N3k.
              </p>
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <AddLocationIcon
                style={{
                  position: "absolute",
                  top: "-25px",
                  fontSize: "50px",
                  color: "#978f3e",
                  left: "40%",
                }}
              />
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10"
            style={{ color: "black" }}
          >
            <ScrollAnimation
              animateIn="bounce"
              initiallyVisible={true}
              animateOnce={true}
            >
              <h5 style={{ color: "#371979", fontWeight: "bold" }}>
                Social reach
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                Harness the power of social media to spread your story and get
                more support.
              </p>
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <BlockIcon
                style={{
                  position: "absolute",
                  top: "-25px",
                  fontSize: "50px",
                  color: "#978f3e",
                  left: "40%",
                }}
              />
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10"
            style={{ color: "black" }}
          >
            <ScrollAnimation
              animateIn="bounce"
              initiallyVisible={true}
              animateOnce={true}
            >
              <h5 style={{ color: "#371979", fontWeight: "bold" }}>
                Fake Pop/Failure to Pay your Commitmemt
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                The system is programmed in such a way that once your time
                elpsed or failure to meet deadline for payment, the system will
                automatically deactivate your account. familarize yourself with
                the system. Reactivation fee N3k.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
