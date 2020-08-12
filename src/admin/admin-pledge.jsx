import React, { Component } from "react";
import { firestore } from "../db/config";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";
import AddMergeDialoug from "./mergeDialoug.";
class AdminPledge extends Component {
  state = {};
  handleMergeId = (userId) => {
    this.props.sendPledgeUser(userId);
  };
  render() {
    const pledgeRecords = this.props.pledgeRecord.map((pledge) => {
      return (
        <tr>
          <th scope="row">{pledge.id}</th>
          <td>{pledge.fullName}</td>
          <td>{pledge.phoneNumber}</td>
          <td>{pledge.amountPledge}</td>

          <td>{pledge.userId}</td>
          <td>{pledge.withdraw}</td>
          <td>{pledge.availability}</td>
          <td>{moment(pledge.createdAt).format("YYYY-MM-DD HH:mm:ss")}</td>
          <td>""</td>
          <td>{pledge.date_to_withdraw}</td>
          <td>""</td>
        </tr>
      );
    });
    return (
      <div
        style={{
          marginTop: "10px",
          paddingTop: "100px",
          height: "100vh",
          overflowY: "scroll",
          paddingBottom: "30px",
        }}
        className="container col-lg-11"
      >
        <div class="card">
          <div class="card-body">
            <h4
              style={{ color: "navy", textAlign: "center", fontWeight: "bold" }}
            >
              Pledge Records
            </h4>
            <div class="table-responsive text-nowrap">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Pledge Id</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Pledge Amount</th>
                    <th scope="col">Pledge User Id</th>
                    <th scope="col">Withdraw</th>
                    <th scope="col"> Pledges Status</th>
                    <th scope="col">Pledge Time</th>
                    <th scope="col">Pledge Start Time</th>
                    <th scope="col">Withdraw Date</th>
                    <th scope="col">Pledge Deu Date</th>
                  </tr>
                </thead>
                <tbody>{pledgeRecords}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  totPledgeRecords: { pledgeRecord },
  pledgeAvailability: { pledge_available },
}) => {
  return {
    pledgeRecord,
    pledge_available,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    sendPledgeUser: (sendData) =>
      dispatch({ type: "pledge_receiver_btn", data: sendData }),
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(AdminPledge);
