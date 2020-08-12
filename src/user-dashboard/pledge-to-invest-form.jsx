import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import NumberFormat from "react-number-format";

import { connect } from "react-redux";

import moment from "moment";
import { firestore } from "../db/config";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
class PledgeForm extends Component {
  state = {
    amount: "",
    loading: false,
  };
  componentDidMount() {}
  handleChange = (attr, evt) => {
    this.setState({
      [attr]: evt.target.value,
    });
  };

  render() {
    const cal = (this.state.amount / 100) * 60;
    const collect = parseInt(this.state.amount) + cal;

    const handleClick = () => {
      var daysToWithdraw = moment().add(3, "days");
      if (this.state.amount === "") {
        alert("please enter an amount");
      } else if (this.state.amount < 5000) {
        alert("you can't pledge below NGN5,000");
      } else if (this.state.amount > 250000) {
        alert("you can't pledge above NGN250,000");
      } else {
        this.setState({
          loading: true,
        });

        firestore
          .collection("pledge")
          .add({
            amountPledge: parseInt(this.state.amount),
            userId: this.props.user,
            createdAt: new Date().toISOString(),
            withdraw: collect,
            paid: "Not paid",
            date_to_withdraw: "Not set",
            fullName: this.props.user_details.fullName,
            phoneNumber: this.props.user_details.phoneNumber,
            availability: "available",
            mergeWithdraw: collect,
            mergeAmountPledge: parseInt(this.state.amount),
            pledge_start_date: "Not set",

            recomit_status: "Not yet",
          })
          .then((result) => {
            this.props.sendPledgeData({
              amountPledge: parseInt(this.state.amount),
              userId: this.props.user,
              createdAt: new Date().toISOString(),
              withdraw: collect,
              paid: "Not paid",
              date_to_withdraw: "Not set",
              fullName: this.props.user_details.fullName,
              phoneNumber: this.props.user_details.phoneNumber,
              availability: "available",
              mergeWithdraw: collect,
              mergeAmountPledge: parseInt(this.state.amount),
              pledge_start_date: "Not set",

              recomit_status: "Not yet",
            });
            this.props.getPledgeData({
              amountPledge: parseInt(this.state.amount),
              userId: this.props.user,
              createdAt: new Date().toISOString(),
              withdraw: collect,
              paid: "Not paid",
              date_to_withdraw: "Not set",
              fullName: this.props.user_details.fullName,
              phoneNumber: this.props.user_details.phoneNumber,
              availability: "available",
              mergeWithdraw: collect,
              mergeAmountPledge: parseInt(this.state.amount),
              pledge_start_date: "Not set",

              recomit_status: "Not yet",
            });
            alert("pledge successful,please kindly wait to be merge");
            this.setState({
              amount: "",
              loading: false,
            });
            this.props.history.push("/userdashboard/user/pledge");
          })
          .catch((error) => {
            this.setState({
              amount: "",
              loading: false,
            });
            alert(error);
          });
      }
    };
    return (
      <div style={{ background: "navy", height: "100vh" }}>
        <div className="container col-lg-5" style={{ paddingTop: "100px" }}>
          <div className="card">
            <div className="card-body">
              <h4
                style={{
                  color: "navy",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Enter amount to pledge
              </h4>
              {this.state.amount === "" ? (
                ""
              ) : (
                <div>
                  Pledge{" "}
                  <NumberFormat
                    value={this.state.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"NGN"}
                  />{" "}
                  to withdraw{" "}
                  <NumberFormat
                    value={collect}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"NGN"}
                  />
                </div>
              )}
              <MDBInput
                label="Enter amount to pledge"
                onChange={(evt) => this.handleChange("amount", evt)}
                value={this.state.amount}
              />
              <div style={{ textAlign: "center" }}>
                {this.state.loading ? (
                  <Button variant="contained" color="primary">
                    Please wait...
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                  >
                    {" "}
                    submit pledge
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
  userId: { userId },
  userDetails: { user_details },
}) => {
  return {
    user: userId,
    user_details,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    sendPledgeData: (sendData) =>
      dispatch({ type: "pledge_data", data: sendData }),
    getPledgeData: (sendData) =>
      dispatch({ type: "upldate_pledge_data", data: sendData }),
  };
};
export default withRouter(
  connect(mapStateToProps, dispatchStateToProps)(PledgeForm)
);
