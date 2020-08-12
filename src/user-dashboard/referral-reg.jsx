import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Button from "@material-ui/core/Button";
import { Auth, firestore } from "../db/config";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ReferralLink extends Component {
  state = {
    fullName: "",
    username: "",
    password: "",
    rpassword: "",
    email: "",
    phoneNumber: "",
    loader: false,
  };
  componentDidMount() {}

  handleChange = (attr, evt) => {
    this.setState({
      [attr]: evt.target.value,
    });
  };
  handleSubmit = () => {
    if (
      this.state.fullName === "" ||
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.rpassword === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === ""
    ) {
      alert("Please enter all empty fields");
    } else if (this.state.password !== this.state.rpassword) {
      alert("password does not match");
    } else if (this.state.password < 6) {
      alert("Password must be atleast 6 characters");
    } else {
      const referral = this.props.match.params.id;
      this.setState({
        loader: true,
      });
      Auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
          firestore
            .collection("users")
            .doc(data.user.uid)
            .get()
            .then((user) => {
              if (user.exists) {
                return "";
              } else {
                firestore
                  .collection("users")
                  .doc(`${data.user.uid}`)
                  .set({
                    fullName: this.state.fullName,
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                    phoneNumber: this.state.phoneNumber,
                    createdAt: new Date().toISOString(),
                    accountName: "",
                    accountNumber: "",
                    bankName: "",
                    activate: "not activated",
                    referralId: this.props.match.params.id,
                    referrals: 0,
                  })
                  .then((data) => {
                    // window.location.href = "/userdashboard/user";

                    this.props.sendUserDetails({
                      fullName: this.state.fullName,
                      username: this.state.username,
                      email: this.state.email,
                      phoneNumber: this.state.phoneNumber,
                      createdAt: new Date().toISOString(),
                      accountName: "",
                      accountNumber: "",
                      bankName: "",
                      activate: false,
                      referralId: this.props.match.params.id,
                      referrals: 0,
                    });
                    alert("registration successful !!!");
                    this.props.history.push("/userdashboard/user");
                    this.setState({
                      loader: false,
                      fullName: "",
                      username: "",
                      password: "",
                      rpassword: "",
                      email: "",
                      phoneNumber: "",
                    });
                  })
                  .catch((error) => {
                    alert(error);
                    this.setState({
                      loader: false,
                      fullName: "",
                      username: "",
                      password: "",
                      rpassword: "",
                      email: "",
                      phoneNumber: "",
                    });
                    return "";
                  });
              }
            });
          return data;
        })
        .catch((error) => {
          alert(error);
          this.setState({
            loader: false,
          });
          return "";
        });
    }
  };
  render() {
    console.log(this.props.match.params.id);
    return (
      <div
        style={{
          background: "navy",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <div className="container col-lg-4" style={{ paddingTop: "100px" }}>
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
                Sign up To Ladder Investment
              </h4>
              <div>
                {" "}
                <MDBInput
                  label="Your Full Name"
                  onChange={(evt) => this.handleChange("fullName", evt)}
                  value={this.state.fullName}
                  type="text"
                />
              </div>
              <div>
                {" "}
                <MDBInput
                  label="Your Username"
                  onChange={(evt) => this.handleChange("username", evt)}
                  value={this.state.username}
                  type="text"
                />
              </div>
              <div>
                {" "}
                <MDBInput
                  label="Your Password"
                  onChange={(evt) => this.handleChange("password", evt)}
                  value={this.state.password}
                  type="password"
                />
              </div>
              <div>
                {" "}
                <MDBInput
                  label="Repeat Password"
                  onChange={(evt) => this.handleChange("rpassword", evt)}
                  value={this.state.rpassword}
                  type="password"
                />
              </div>
              <div>
                {" "}
                <MDBInput
                  label="Your Email"
                  onChange={(evt) => this.handleChange("email", evt)}
                  value={this.state.email}
                  type="email"
                />
              </div>
              <div>
                {" "}
                <MDBInput
                  label="Your Phone Number"
                  onChange={(evt) => this.handleChange("phoneNumber", evt)}
                  value={this.state.phoneNumber}
                  type="number"
                />
              </div>
              <div className="col-lg-12" style={{ textAlign: "center" }}>
                {this.state.loader ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Please wait...
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Register
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
const dispatchStateToProps = (dispatch) => {
  return {
    sendUserDetails: (sendData) =>
      dispatch({ type: "user_details", data: sendData }),
  };
};
export default withRouter(connect(null, dispatchStateToProps)(ReferralLink));
