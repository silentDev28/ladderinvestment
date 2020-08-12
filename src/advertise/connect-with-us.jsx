import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
class ConnectWithUs extends Component {
  state = {};
  render() {
    return (
      <div id="connectwithUs">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <h4
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            The leader in online Crowdfunding
          </h4>
          <h5
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Inestment Plans
          </h5>
        </ScrollAnimation>

        <div className="container col-lg-10">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-12 col-12 col-xs-12"
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="card">
                <div
                  className="card-body"
                  style={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: " #371979",
                    paddingTop: "30px",
                    paddingBottom: "30px",
                  }}
                >
                  <h5
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Minimum Pledge
                  </h5>
                  NGN5,000<br></br>
                  <div>
                    <Link to="/userdashboard/user">
                      <Button
                        variant="contained"
                        style={{
                          background: "#978F3E",
                          color: "white",
                          borderRadius: "25px",
                        }}
                      >
                        Sign Up Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 col-xs-12">
              <div className="card">
                <div
                  className="card-body"
                  style={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: " #371979",
                    paddingTop: "30px",
                    paddingBottom: "30px",
                  }}
                >
                  <h5
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Maximum Pledge
                  </h5>
                  NGN250,000
                  <div>
                    <Link to="/userdashboard/user">
                      <Button
                        variant="contained"
                        style={{
                          background: "#978F3E",
                          color: "white",
                          borderRadius: "25px",
                        }}
                      >
                        Sign Up Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConnectWithUs;
