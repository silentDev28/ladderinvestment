import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { firestore } from "../db/config";
// import moment from "moment";
class DeactivateUser extends Component {
  state = {
    loading: false,
  };
  handleDeactivate = () => {
    // alert(this.props.userId);
    this.setState({
      loading: true,
    });
    firestore
      .collection("users")
      .doc(`${this.props.userId}`)
      .update({ activate: "deactivated", activate_status: "locked" })
      .then((data) => {
        firestore
          .collection("merge")
          .doc(`${this.props.mergeId}`)
          .update({ merge_status: "not successful" })
          .then((data) => {
            firestore
              .collection("priorityMerge")
              .add({ mergeId: this.props.mergeId })
              .then((data) => {
                this.setState({
                  loading: false,
                });
                alert("This user has been deactivated");
                window.location.href = "/userdashboard/user";
              })
              .catch((error) => {
                console.log(error);
                this.setState({
                  loading: false,
                });
              });
          })
          .catch((error) => {
            console.log(error);
            this.setState({
              loading: false,
            });
          });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
        });
      });
  };
  render() {
    return (
      <div>
        <div style={{ color: "red", fontWeight: "bold" }}>
          Note: Once the transaction time elapses and payment is not yet
          received you can deactivate user
        </div>
        {this.state.loading ? (
          <Button variant="contained" color="secondary">
            Please wait...
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleDeactivate}
          >
            Deactivate user
          </Button>
        )}
      </div>
    );
  }
}

export default DeactivateUser;
