import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { Link } from "react-router-dom";
import { Auth } from "../../db/config";
import { connect } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import LockIcon from "@material-ui/icons/Lock";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleLogin = () => {
    this.props.SendLoginAndReg("login");
  };
  handleRegister = () => {
    this.props.SendLoginAndReg("register");
  };
  render() {
    console.log(this.props.user);
    return (
      <MDBNavbar
        className="fixed-top"
        color="primary-color-dark"
        dark
        expand="md"
        style={{ paddingTop: "6px", paddingBottom: "6px" }}
      >
        <MDBNavbarBrand>
          <Link to="/userdashboard/user">
            {" "}
            <strong className="white-text">Ladder Investment</strong>
          </Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          {this.props.user === null ? (
            <MDBNavbarNav right>
              {this.props.loginAndReg === "register" ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleLogin}
                >
                  <LockOpenIcon />
                  Login
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleRegister}
                >
                  <PersonAddIcon /> Register
                </Button>
              )}
            </MDBNavbarNav>
          ) : (
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link to="/userdashboard/user">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginRight: "5px",
                      marginBottom: "5px",
                      marginTop: "5px",
                    }}
                  >
                    <HomeIcon />
                    Home
                  </Button>
                </Link>
              </MDBNavItem>

              <MDBNavItem>
                <Link to="/userdashboard/user/transaction">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginRight: "5px",
                      marginBottom: "5px",
                      marginTop: "5px",
                    }}
                  >
                    <AccountBalanceIcon />
                    Transactions
                  </Button>
                </Link>
              </MDBNavItem>

              <MDBNavItem>
                <Link to="/userdashboard/user/pledge">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginRight: "5px",
                      marginBottom: "5px",
                      marginTop: "5px",
                    }}
                  >
                    <CheckCircleOutlineIcon />
                    Pledges
                  </Button>
                </Link>
              </MDBNavItem>

              <MDBNavItem>
                <Link to="/userdashboard/user/referrals">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginRight: "5px",
                      marginBottom: "5px",
                      marginTop: "5px",
                    }}
                  >
                    <AccountTreeIcon />
                    Referrals
                  </Button>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="/userdashboard/user/changepassword">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginRight: "5px",
                      marginBottom: "5px",
                      marginTop: "5px",
                    }}
                  >
                    <LockIcon />
                    Change Password
                  </Button>
                </Link>
              </MDBNavItem>

              <MDBNavItem>
                <Link to="/userdashboard/user/profile">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginRight: "5px",
                      marginBottom: "5px",
                      marginTop: "5px",
                    }}
                  >
                    <AccountCircleIcon />
                    Profile
                  </Button>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => Auth.signOut()}
                  style={{ marginTop: "5px" }}
                >
                  <ExitToAppIcon />
                  Logout
                </Button>
              </MDBNavItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
const mapStateToProps = ({
  userAuth: { user },
  loginAndReg: { loginAndReg },
}) => {
  return {
    user,
    loginAndReg,
  };
};
const dispachStateToProps = (dispatch) => {
  return {
    SendLoginAndReg: (sendData) =>
      dispatch({ type: "send_route", data: sendData }),
  };
};
export default connect(mapStateToProps, dispachStateToProps)(NavbarPage);
