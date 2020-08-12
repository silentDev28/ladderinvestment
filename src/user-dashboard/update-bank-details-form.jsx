import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";
import { firestore } from "../db/config";
import { withRouter } from "react-router-dom";

class BankUpdateForm extends Component {
  state = {
    accountName: "",
    accountNumber: "",
    bankName: "",
    loading: false,
  };
  handleChange = (attr, evt) => {
    this.setState({
      [attr]: evt.target.value,
    });
  };
  handleClick = () => {
    if (
      this.state.bankName === "" ||
      this.state.accountName === "" ||
      this.state.accountNumber === ""
    ) {
      alert("Please fill all empty fields");
    } else {
      this.setState({
        loading: true,
      });
      firestore
        .collection("users")
        .where("accountName", "==", this.state.accountName)
        .where("accountNumber", "==", this.state.accountNumber)
        .get()
        .then((data) => {
          if (data.empty) {
            firestore
              .collection("users")
              .doc(`${this.props.user}`)
              .update({
                bankName: this.state.bankName,
                accountName: this.state.accountName,
                accountNumber: this.state.accountNumber,
              })
              .then((data) => {
                this.props.getNewUserDetails({
                  accountName: this.state.accountName,
                  accountNumber: this.state.accountNumber,
                  bankName: this.state.bankName,
                  email: this.props.userDetails.email,
                  fullName: this.props.userDetails.fullName,
                  phoneNumber: this.props.userDetails.phoneNumber,
                  username: this.props.userDetails.username,
                  createdAt: this.props.userDetails.createdAt,
                  referral_link: this.props.userDetails.referral_link,
                  referrals: this.props.userDetails.referrals,
                });
                alert("Bank details updated successful");
                this.props.history.push("/userdashboard/user");
                this.setState({
                  accountName: "",
                  accountNumber: "",
                  bankName: "",
                  loading: false,
                });
              })
              .catch((error) => {
                alert(error);
                this.setState({
                  accountName: "",
                  accountNumber: "",
                  bankName: "",
                  loading: false,
                });
              });
          } else {
            alert("User with this credential already exist");
            this.setState({
              accountName: "",
              accountNumber: "",
              bankName: "",
              loading: false,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    return (
      <div style={{ background: "navy", height: "100vh" }}>
        <div className="container col-lg-5" style={{ paddingTop: "100px" }}>
          <div class="card">
            <div class="card-body">
              <h4
                style={{
                  textAlign: "center",
                  width: "100%",
                  color: "navy",
                  fontWeight: "bold",
                }}
              >
                Update bank details
              </h4>
              <MDBInput
                label="Enter Bank Name"
                type="text"
                onChange={(evt) => this.handleChange("bankName", evt)}
                value={this.state.bankName}
              />

              <MDBInput
                label="Enter Account Name"
                type="text"
                onChange={(evt) => this.handleChange("accountName", evt)}
                value={this.state.accountName}
              />

              <MDBInput
                label="Enter Account Number"
                type="number"
                onChange={(evt) => this.handleChange("accountNumber", evt)}
                value={this.state.accountNumber}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                {this.state.loading ? (
                  <Button variant="contained" color="primary">
                    Please wait...
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Update
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
const mapStateToProps = ({
  userDetails: { user_details },
  userId: { userId },
}) => {
  return {
    userDetails: user_details,
    user: userId,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    getNewUserDetails: (sendData) =>
      dispatch({ type: "update_bank_details", data: sendData }),
  };
};
export default withRouter(
  connect(mapStateToProps, dispatchStateToProps)(BankUpdateForm)
);
