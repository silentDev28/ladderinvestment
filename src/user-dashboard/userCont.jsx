import React, { Component } from "react";
import PrimarySearchAppBar from "./navbar/navbar";
import LoginUser from "./auth/login-user";
import RegUser from "./auth/reg-user";
import UserDashBoardHome from "./user-dashboard-home";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Transaction from "./transaction";
import Pledge from "./pledge";
import Referrals from "./referrals";
import ChangePassword from "./change-password";
import HomeComp from "../advertise/home-comp";
import ProfilePage from "./profile-page";
import UpdateBankDetailsForm from "./update-bank-details-form";
import PledgeToInvest from "./pledge-to-invest-form";
import UploadConfirmation from "./upload-confirmation";
import BackLoader from "../loader/loader";
import FooterPage from "./footer";
class UserCont extends Component {
  state = {};

  render() {
    return (
      <div>
        <PrimarySearchAppBar />

        {this.props.user === null ? (
          <div style={{ height: "100vh" }}>
            {" "}
            {this.props.loginAndReg === "register" ? (
              <RegUser />
            ) : (
              <LoginUser />
            )}
          </div>
        ) : (
          <div>
            {this.props.user_details !== "" ? (
              <div style={{ background: "navy" }}>
                <Switch>
                  <Route
                    exact
                    path="/userdashboard/user/"
                    component={HomeComp}
                  ></Route>
                  <Route
                    path="/userdashboard/user/transaction"
                    component={Transaction}
                  ></Route>
                  <Route
                    path="/userdashboard/user/pledge"
                    component={Pledge}
                  ></Route>
                  <Route
                    path="/userdashboard/user/referrals"
                    component={Referrals}
                  ></Route>
                  <Route
                    path="/userdashboard/user/changepassword"
                    component={ChangePassword}
                  ></Route>
                  <Route
                    path="/userdashboard/user/profile"
                    component={ProfilePage}
                  ></Route>
                  <Route
                    path="/userdashboard/user/update-bankdetails"
                    component={UpdateBankDetailsForm}
                  ></Route>
                  <Route
                    path="/userdashboard/user/pledge-form"
                    component={PledgeToInvest}
                  ></Route>
                  <Route
                    path="/userdashboard/user/upload-confirmation/:id"
                    component={UploadConfirmation}
                  ></Route>
                </Switch>
                <FooterPage />
              </div>
            ) : (
              <BackLoader />
            )}
          </div>
        )}
      </div>
    );
  }
}
const mapstateToProps = ({
  loginAndReg: { loginAndReg },
  userAuth: { user },
  userDetails: { user_details },
}) => {
  return {
    loginAndReg,
    user,
    user_details,
  };
};
export default withRouter(connect(mapstateToProps)(UserCont));
