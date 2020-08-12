import React, { Component } from "react";
import FirestRowCards from "../user-dashboard/firstRow";
import SecondRowCard from "../user-dashboard/secondRow";
import { connect } from "react-redux";
import BankDetails from "../user-dashboard/bank-details-alert";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MergAlert from "../user-dashboard/mergeAlert";
import WelcomeAlerts from "./welcome-user";

class AdvertHome extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div
        style={{
          marginTop: "60px",
          background: "navy",
          height: "100vh",
          overflowY: "scroll",
          paddingBottom: "10px",
        }}
        className="home"
      >
        <div
          className="container col-lg-12"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          {this.props.user_details ? <WelcomeAlerts /> : ""}
        </div>
        {this.props.user_details.activate === "activated" ? (
          <div>
            {this.props.last_pledge_data.length !== 0 ||
            this.props.update_last_pledge_record !== "" ? (
              ""
            ) : (
              <Link to="/userdashboard/user/pledge-form">
                <Button
                  variant="contained"
                  color="default"
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                >
                  Pledge to start investing
                </Button>
              </Link>
            )}
          </div>
        ) : (
          <BankDetails />
        )}
        <div className="col-lg-12">
          <MergAlert />
        </div>
        <div className="container col-lg-12">
          <div style={{ marginBottom: "10px" }}>
            <FirestRowCards />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <SecondRowCard />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  userDetails: { user_details },
  userId: { userId },
  lastPledge: { last_pledge_data },
  updateLastPledge: { update_last_pledge_record },
}) => {
  return {
    user_details,
    userId,
    last_pledge_data,
    update_last_pledge_record,
  };
};
// const dispatchStateToProp = (dispatch) => {
//   return {
//     sendPledgeRecord: (sendData) =>
//       dispatch({ type: "pledge_record", data: sendData }),
//   };
// };
export default connect(mapStateToProps)(AdvertHome);
