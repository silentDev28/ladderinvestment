import React, { Component } from "react";
import InfoIcon from "@material-ui/icons/Info";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import SecurityIcon from "@material-ui/icons/Security";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ScrollAnimation from "react-animate-on-scroll";
class About extends Component {
  state = {};
  render() {
    return (
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12"
        style={{ marginBottom: "30px" }}
      >
        <div className="row">
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <InfoIcon
                style={{
                  position: "absolute",
                  top: "-25px",
                  fontSize: "50px",
                  color: " #978f3e",
                  left: "40%",
                }}
              />
            </ScrollAnimation>
          </div>

          <div
            className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10"
            style={{ color: "black", marginBottom: "20px" }}
          >
            <ScrollAnimation
              animateIn="bounce"
              initiallyVisible={true}
              animateOnce={true}
            >
              <h5 style={{ color: "#371979", fontWeight: "bold" }}>
                About Ladder Investment
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                There’s a part of every one of us that dreams of a better world.
                That spark of inspiration to help a person, full dreams, or even
                change a nation. At Ladder Investment, we empower both
                individuals and nonprofits to turn compassion into action.
                Because that is how change happens.
              </p>
              <p>
                With free Crowdfunding for all, we are creating the giving layer
                of the internet: a space where individuals, teams, organizations
                can champion causes that matter and raise money to make a
                lasting difference.
              </p>
              <p>
                Through Ladder Investment, people have the tools they need to
                share their cause far and wide and harness the power of
                crowdfunding. We are transforming the way people give and
                changing lives—are you ready to join us
              </p>
              <br></br>
              Ladder Investment is based on a peer to peer investment basis
              funded with naira.
            </ScrollAnimation>
          </div>

          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <TrackChangesIcon
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
                Our Diffrence
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                Dedicated Server We use a dedicated server with highest level of
                DDOS protection to ensure investors funds always safe with us.
                24/7 Customer Support
              </p>
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <MergeTypeIcon
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
                Merging Program
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                Our matching/Merging is fast and designed in such a way to make
                sure every participant is happy first in first out principle.
              </p>
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <SecurityIcon
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
              <h5 style={{ color: "#371979", fontWeight: "bold" }}>Security</h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                Stability is of the highest priority for Ladder Investment. We
                give all efforts to provide troublefree services backed by
                system and user account security, financial viability, and
                profound legal compliance.
              </p>
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <HelpOutlineIcon
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
                24/7 expert advice
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                Our best-in-class Customer Happiness agents will answer your
                questions, day or night.
              </p>
            </ScrollAnimation>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"
            style={{ textAlign: "right", position: "relative" }}
          >
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <AccountTreeIcon
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
                Referral program
              </h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                Earn more by referring users to crowdfund their project.For each
                deposit made, you will receive a percentage of the amount.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
