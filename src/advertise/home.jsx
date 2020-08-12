import React, { Component } from "react";
import AdvertismentNavbar from "./advertise-navbar";
import InvestImage from "../images/header-2.jpg";
import Typed from "react-typed";
import InfoPage from "./info";
import About from "./about";
import HowItWorks from "./how-it-works";
import ConnectWithUs from "./connect-with-us";
import ContactUs from "./contact-us";
import FooterPage from "./footer";
import Captions from "./caption";
class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%" }}>
        <AdvertismentNavbar />
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.7)",
            }}
          ></div>

          <img
            src={InvestImage}
            alt="invest"
            style={{ width: "100%", height: "100%" }}
          />
          <div id="captions" className="">
            <Captions />
          </div>
        </div>
        <InfoPage />
        <div className="container col-lg-10" style={{ marginTop: "30px" }}>
          <div className="row">
            <About />
            <HowItWorks />
          </div>
          <ConnectWithUs />
        </div>
        <ContactUs />
        <FooterPage />
      </div>
    );
  }
}

export default Home;
