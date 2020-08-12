import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import { Button } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: "150px",
          paddingBottom: "150px",
          background: "#FFFFFF",
        }}
      >
        <ScrollAnimation
          animateIn="bounce"
          initiallyVisible={true}
          animateOnce={true}
        >
          <h3
            style={{
              textAlign: "center",
              width: "100%",
              fontWeight: "bold",
              color: " #371979",
            }}
          >
            Contact Us
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <h5
            style={{
              textAlign: "center",
              fontWeight: "bold",
              paddingBottom: "30px",
            }}
          >
            {" "}
            We would like to hear from you
          </h5>
          <div className="container col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <MDBInput label="Your Name" type="text" />
              </div>
              <div className="col-lg-6">
                <MDBInput label="Your Email" type="email" />
              </div>
              <div className="col-lg-6">
                <MDBInput label="Your Phone number" type="number" />
              </div>
              <div className="col-lg-12">
                <MDBInput type="textarea" label="Your Message" background />
              </div>
              <div className="col-lg-12" style={{ textAlign: "center" }}>
                <Button
                  style={{
                    background: " #371979",
                    color: "white",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "26px",
                    fontSize: "18px",
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default ContactUs;
