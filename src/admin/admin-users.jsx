import React, { Component } from "react";
import { firestore } from "../db/config";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import moment from "moment";
class AdminUsers extends Component {
  state = {
    users: [],
  };
  handleActivation = (userId) => {
    firestore
      .collection("users")
      .doc(`${userId}`)
      .update({ activate: "activated" })
      .then((data) => {
        alert("user successfuly activated");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const userRecords = this.props.usersRecord.map((user) => {
      return (
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.fullName}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.activate}</td>
          <td>{user.accountName}</td>
          <td>{user.bankName}</td>
          <td>{user.accountNumber}</td>
          <td>{user.phoneNumber}</td>
          <td>{moment(user.createdAt).format("YYYY-MM-DD HH:mm:ss")}</td>
          <td>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleActivation(user.id)}
            >
              Activate user
            </Button>{" "}
          </td>
          <td>
            <Button variant="contained" color="secondary">
              Deactivate user
            </Button>
          </td>
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
              Users Records
            </h4>
            <div class="table-responsive text-nowrap">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">User id</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Activate</th>
                    <th scope="col">Bank Account</th>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Account Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Activate User</th>
                    <th scope="col">Deactivat user</th>
                  </tr>
                </thead>
                <tbody>{userRecords}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ usersRecord: { usersRecord } }) => {
  return {
    usersRecord,
  };
};
export default connect(mapStateToProps)(AdminUsers);
