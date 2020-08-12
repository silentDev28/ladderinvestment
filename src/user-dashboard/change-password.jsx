import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Button from "@material-ui/core/Button";

import { Auth, firestore } from "../db/config";
import { connect } from "react-redux";

class ChangePassword extends Component {
  state = {
    email: "",
    loading: false,
  };
  handleChange = (attr, evt) => {
    this.setState({
      [attr]: evt.target.value,
    });
  };
  handleClick = () => {
    this.setState({
      loading: true,
    });
    if (this.state.email === "") {
      alert("please fill all empty fields");
      this.setState({
        loading: false,
      });
    } else {
      var emailAddress = this.state.email;

      Auth.sendPasswordResetEmail(emailAddress)
        .then(function () {
          this.setState({
            loading: false,
          });
          alert("password reset sent to your email address");
          window.location.href = "/userdashboard/user";
        })
        .catch(function (error) {
          // An error happened.
        });
    }
  };
  render() {
    return (
      <div style={{ background: "navy", height: "100vh", overflowY: "scroll" }}>
        <div className="container col-lg-4" style={{ paddingTop: "150px" }}>
          <div className="card">
            <div className="card-body">
              <h4
                className="col-lg-12"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#0d47a1",
                }}
              >
                Change Password
              </h4>

              <div>
                {" "}
                <MDBInput
                  type="email"
                  label="Your Email"
                  onChange={(evt) => this.handleChange("email", evt)}
                  value={this.state.email}
                />
              </div>

              <div className="col-lg-12" style={{ textAlign: "center" }}>
                {this.state.loading ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Please wait...
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Change Password
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ userId: { userId } }) => {
  return {
    userId,
  };
};
export default connect(mapStateToProps)(ChangePassword);
