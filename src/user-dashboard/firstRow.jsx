import React, { Component } from "react";
import { connect } from "react-redux";
import PeopleIcon from "@material-ui/icons/People";
class FirestRowCards extends Component {
  state = {};

  render() {
    var sum = 0;
    var totalDonations;
    const cal1 = this.props.pledge_details.pledge_details
      ? this.props.pledge_details.pledge_details.map((datas) => {
          if (datas.paid === "Not paid") {
            return (totalDonations = sum += 0);
          } else {
            return (totalDonations = sum += datas.amountPledge);
          }
        })
      : "";
    var sum1 = 0;
    var totWithDraw;
    const cal2 = this.props.pledge_details.pledge_details
      ? this.props.pledge_details.pledge_details.map((datas) => {
          if (datas.paid === "Not paid") {
            return (totWithDraw = sum1 += 0);
          } else {
            return (totWithDraw = sum1 += datas.withdraw);
          }
        })
      : "";
    var sum2 = 0;
    var totHelpReceived;
    const cal3 = this.props.pledge_details.pledge_details
      ? this.props.pledge_details.pledge_details.map((datas) => {
          return (totHelpReceived = sum2 += datas.help_received);
        })
      : "";

    return (
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
          <div
            className="card"
            style={{ background: "#f50057", color: "white" }}
          >
            <div className="card-body">
              <h5 style={{ fontWeight: "bold", textAlign: "center" }}>
                Total Donations
              </h5>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                NGN {totalDonations ? totalDonations : 0}
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6"
          style={{ marginBottom: "20px" }}
        >
          <div
            className="card"
            style={{ background: "#357a38", color: "white" }}
          >
            <div className="card-body">
              <h5 style={{ fontWeight: "bold", textAlign: "center" }}>
                Total Money Earn
              </h5>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                NGN {totWithDraw ? totWithDraw : 0}
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6"
          style={{ marginBottom: "20px" }}
        >
          <div
            className="card"
            style={{ background: "#ff9100", color: "white" }}
          >
            <div className="card-body">
              <h5 style={{ fontWeight: "bold", textAlign: "center" }}>
                Help Received
              </h5>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                NGN {totHelpReceived ? totHelpReceived : 0}
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6"
          style={{ marginBottom: "20px" }}
        >
          <div
            className="card"
            style={{ background: "#03a9f4", color: "white" }}
          >
            <div className="card-body">
              <h5 style={{ fontWeight: "bold", textAlign: "center" }}>
                Referred Users
              </h5>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                <PeopleIcon style={{ marginRight: "5px" }} />
                {this.props.ref_users ? this.props.ref_users.length : 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  pledgeRecords: pledge_details,
  userId: { userId },
  userDetails: { user_details },
  refUsers: { ref_users },
}) => {
  return {
    pledge_details,
    userId,
    user_details,
    ref_users,
  };
};
export default connect(mapStateToProps)(FirestRowCards);
