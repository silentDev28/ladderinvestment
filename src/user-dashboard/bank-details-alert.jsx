import React, { Component } from "react";
import { MDBContainer, MDBAlert } from "mdbreact";
import Button from "@material-ui/core/Button";
import BankUpdateForm from "./bank-update-form";
import { connect } from "react-redux";
import { firestore } from "../db/config";
import { Link } from "react-router-dom";
import ActivationInstruction from "./activation-instruction";
class BankDetails extends Component {
  state = {};

  render() {
    console.log(this.props.userDetails);
    return (
      <div className="container col-lg-12" style={{ marginTop: "10px" }}>
        <h4>
          {this.props.user_details ? (
            this.props.user_details.bankName === "" ||
            this.props.user_details.accountName === "" ||
            this.props.user_details.accountNumber === "" ? (
              <MDBAlert color="warning">
                Please update your bank details{" "}
                <Link to="/userdashboard/user/update-bankdetails">
                  <Button variant="contained" color="primary">
                    Update
                  </Button>
                </Link>
              </MDBAlert>
            ) : (
              <ActivationInstruction />
            )
          ) : (
            ""
          )}
        </h4>
      </div>
    );
  }
}
const mapStateToProps = ({
  userId: { userId },
  userDetails: { user_details },
}) => {
  return {
    userId,
    user_details,
  };
};
export default connect(mapStateToProps)(BankDetails);
